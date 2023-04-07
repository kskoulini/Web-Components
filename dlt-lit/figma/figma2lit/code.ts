// import { writeFile, readFileSync, writeFileSync, promises as fsPromises } from 'fs';
// import { join } from 'path';
// var fs = require('fs');
// import { writeFile } from 'fs';
// import { escape } from "querystring";

var xOffset = 0;
var yOffset = 0;
var nodes: InstanceNode[] = [];

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
// console.log(__html__);
figma.showUI(__html__, { width: 600, height: 200, title: "Figma to Lit" });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  console.log("message: %O", msg);
  switch (msg.type) {
    case 'request-nodelist': {
      var result: string[] = [];
      figma.currentPage.children.forEach((node: InstanceNode, i: number) => {
        const mainNode = node.mainComponent;
        const nodeName = (node ? node.name ? node.name : node : node);
        const mainName = (mainNode ? mainNode.name ? mainNode.name : mainNode : mainNode);
        const nodeText = collectText(node);
        console.log("node %O = %O = %O, main component = %O", i, node, nodeName, mainName);
        nodes.push(node);
        result.push(`(${i}) ${nodeName} - ${mainName} [${nodeText}]`);
      });
      figma.ui.postMessage(result);
      break;
    }
    case 'inspect-page': {
      var lastNode: string = "nothing selected";
      const selection: string = msg.selection;
      if (selection) {
        const index = selection.replace(/^[(]([0-9+])[)].*$/, "$1");
        console.log("index = %O, selection = %O", index, selection);
        const n: InstanceNode = nodes[index];
        const m: ComponentNode = n.mainComponent;
        console.log("node %O = %O, main component = %O", index, n, m);
        lastNode = `<p>${n.name}: ${m ? m.name : m} </p>`;
        const html = generateHTML(n);
        console.log("Generated HTML:");
        console.log(html);
        console.log("Generated HTML (escaped):");
        console.log(escapeHTML(html));
        showGeneratedHTML(lastNode, html);
      }
//      figma.currentPage.children.forEach((n: InstanceNode, i: number) => {
        // console.log("- styles: bg = %O, fill = %O", figma.getStyleById(n.backgroundStyleId).name
         //, figma.getStyleById(n.fillStyleId).name
        // );
//        for (var prop in n) {
//          console.log(" - %O = %O", prop, n[prop]);
//        }
//      });
      console.log(lastNode);
      break;
    }
    default: {
      console.log("Unknown message: %O", msg);
      figma.showUI(
        "<b>Hello from Figma</b>",
        { width: 400, height: 200, title: "My title" }
      );
      figma.closePlugin();
    }
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};

function collectText(node: InstanceNode): string {
  var result: string[] = [];
  for (var i in node.children) {
    const child = node.children[i];
    // console.log("child: %O", child);
    if (child.name && child.constructor.name === "TextNode") {
      console.log("node %O child %O = %O (%O)",node, i, child, child.constructor.name);
      result.push(child.name);
    }
//    if ((typeof child) extends TextNode) {
//
//    }
  }
  return result.join(" | ");
}

function generateHTML(node: InstanceNode): string {
  const mainNode = node.mainComponent;
  const nodeName = (node ? node.name ? node.name : node : node);
  const mainName = (mainNode ? mainNode.name ? mainNode.name : mainNode : mainNode);
  const nodeText = collectText(node);
  const bgStyle = figma.getStyleById(node.backgroundStyleId)?.name;
  const fillStyle = figma.getStyleById(node.fillStyleId.toString())?.name;
  const strokeStyle = figma.getStyleById(node.strokeStyleId.toString())?.name;
  const paddingTop = node.paddingTop;
  const paddingRight = node.paddingRight;
  const paddingBottom = node.paddingBottom;
  const paddingLeft = node.paddingLeft;
  var html = `
    <HTML>
      <HEAD>
        <TITLE>Lit component: ${nodeName}</TITLE>
      </HEAD>
      <BODY>
        <${nodeName}
          style="color:  var(--${strokeStyle});
            background-color: var(--${bgStyle});
            padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;"
          ${mainName}
        >${nodeText}</${nodeName}>
      </BODY>
    </HTML>
  `;
  return html;
}

function escapeHTML(content: string): string {
  const htmlEscapes = {
      '\n': '<br/>',
      ' ': '&nbsp',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
  };
  
  const reUnescapedHtml = /[&<>"'\n ]/g;

  return content.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]);
}

function showGeneratedHTML(description: string, html: string) {
  figma.showUI(
    `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 1rem;">
      <h2>Component</h2>
      ${description}
      <h2>Code</h2>
      <div style="font-family: monospace">
        ${escapeHTML(html)}
      </div>
    </div>`,
    { width: 1200, height: 600, title: "Your web component code" }
  );
}
