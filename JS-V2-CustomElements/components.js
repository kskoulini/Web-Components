const dltTextInputTemplate = document.createElement('template');
dltTextInputTemplate.innerHTML = `
<!-- Delite CSS Links -->
<link rel="stylesheet" type="text/css" href="node_modules/@softwareag/dlt-components/css/delite.min.css"/>
<link rel="stylesheet" type="text/css" href="node_modules/@softwareag/dlt-icons/Font/css/dlt-icons-font.css"/>
<div class="dlt-form-item">
<label class="dlt-form-label" for="text-input-2">Email</label>
<div class="dlt-form-group">
    <input id="text-input-2" type="text" required aria-required="true" class="dlt-text-input" placeholder="mary@softwareag.com">
    <button class="clear-icon" type="button" aria-label="Clear"><i class="dlt-icon-close"></i></button>
</div>
</div>
`
const dltTextAreaTemplate = document.createElement('template');
dltTextAreaTemplate.innerHTML = `
<!-- Delite CSS Links -->
<link rel="stylesheet" type="text/css" href="node_modules/@softwareag/dlt-components/css/delite.min.css"/>
<link rel="stylesheet" type="text/css" href="node_modules/@softwareag/dlt-icons/Font/css/dlt-icons-font.css"/>
<div class="dlt-form-item">
  <label class="dlt-form-label" for="text-area-1">Description</label>
  <div class="dlt-form-group">
      <textarea id="text-area-1" cols="30" rows="4" placeholder="Describe your Keystore"
        class="dlt-text-input dlt-textarea"></textarea>
  </div>
</div>
`
const dltPasswordInputTemplate = document.createElement('template');
dltPasswordInputTemplate.innerHTML = `
<!-- Delite CSS Links -->
<link rel="stylesheet" type="text/css" href="node_modules/@softwareag/dlt-components/css/delite.min.css"/>
<link rel="stylesheet" type="text/css" href="node_modules/@softwareag/dlt-icons/Font/css/dlt-icons-font.css"/>
<div class="dlt-form-item">
  <label class="dlt-form-label" for="password-input-2">Password</label>
  <div class="dlt-form-group">
      <input id="password-input-2" type="password" required aria-required="true" class="dlt-text-input">
      <button class="clear-icon clear-icon-more-padding" type="button" aria-label="Clear"><i class="dlt-icon-close"></i></button>
      <button class="password-show-icon" type="button" data-i18n-title-show="Show password" data-i18n-title-hide="Hide password" title="Show Password"><i
        class="dlt-icon-password-show"></i></button>
  </div>
</div>
`


class dltTextInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:'open' }); // Attaching the shadow root

        // Getting the "type" attribute defined on the dlt-text-input element
        // this--> referes to dlt-text-input
        let typeValue = this.hasAttribute('type') ? this.getAttribute('type') : '';

        if(typeValue == 'textarea'){
            // if 'type=textarea' is set
            this.shadowRoot.appendChild(dltTextAreaTemplate.content.cloneNode(true));

        }
        else if(typeValue == 'password'){
            // if 'type=password' is set
            this.shadowRoot.appendChild(dltPasswordInputTemplate.content.cloneNode(true));
        }
        else{
            // if 'type=text' is set OR an invalid type is set
            // defaults to single-text input
            this.shadowRoot.appendChild(dltTextInputTemplate.content.cloneNode(true));
        }
    }
}

window.customElements.define("dlt-text-input", dltTextInput);
