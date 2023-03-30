/*
    Refer: https://codelabs.developers.google.com/codelabs/the-lit-path#6

    Lit that allows you to write HTML templates in Javascript,
    then efficiently render and re-render those templates together with data to create and update DOM.
    It is similar to popular JSX (React) and VDOM libraries but it 
    runs natively in the browser and much more efficiently in many cases.
*/

// Importing lit
import {LitElement, html, css} from 'lit';

class RatingElement extends LitElement {
    // Remove connectedCallback
    // Removed disconnectedCallback
    // Removed _onUpClick
    // Removed _onDownClick

    static get styles() {
        /*
            This is where most styles live in Lit. 
            Lit will take these styles and use browser features such as Constructable Stylesheets 
            to provide faster rendering times as well as pass it through the Web Components polyfill 
            on older browsers if necessary.
        */
        return css`
          :host {
            display: inline-flex;
            align-items: center;
          }
          button {
            background: transparent;
            border: none;
            cursor: pointer;
          }
    
          :host([vote=up]) .thumb_up {
            fill: green;
          }
    
          :host([vote=down]) .thumb_down {
            fill: red;
          }
        `;
      }

    constructor() {
        super();
        this.rating = 0;
        this.vote = null;
    }

    /*  
        Lit introduces a set of render lifecycle callback methods on top of the native Web Component callbacks. 
        These callbacks are triggered when declared Lit properties are changed.
    */
    // Removed observedAttributes
    // Removed attributeChangedCallback
    // Removed get vote() and get rating()

    static get properties() {
        return {
          rating: {
            type: Number,
          },
          vote: {
            type: String,
            reflect: true,
          }
        };
    }
    
    // Removing set vote() and set rating()
    // Function runs everytime the component is updated
    // .i.e everytime the attributes of the component is modified
    willUpdate(changedProps) {
        if (changedProps.has('vote')) {
          const newValue = this.vote;
          const oldValue = changedProps.get('vote');
      
          if (newValue === 'up') {
            if (oldValue === 'down') {
              this.rating += 2;
            } else {
              this.rating += 1;
            }
          } else if (newValue === 'down') {
            if (oldValue === 'up') {
              this.rating -= 2;
            } else {
              this.rating -= 1;
            }
          }
        }
        else if (changedProps.has('rating')){
            this.rating = changedProps.get('rating');
        }
    }

    render() {
        return html`
          <button
              class="thumb_down"
              @click=${() => {this.vote = 'down'}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>
          </button>
          <span class="rating">${this.rating}</span>
          <button
              class="thumb_up"
              @click=${() => {this.vote = 'up'}}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewbox="0 0 24 24" width="24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
          </button>`;
    }

}
   
customElements.define('rating-element', RatingElement);