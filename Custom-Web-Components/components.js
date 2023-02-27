const dltTextInputTemplate = document.createElement('template');
dltTextInputTemplate.innerHTML = `
    <style>

        .dlt-form-item {
        display: flex;
        align-items: flex-start;
        flex: 1 1;
        flex-direction: column;
        width: 100%;
        }

        .dlt-form-item[disabled="disabled"]{
            cursor: not-allowed;
            opacity: 0.5;
        }

        .dlt-form-label {
        color: #333;
        display: inline-block;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1rem;
        margin: 0;
        padding-bottom: 0.25rem;
        vertical-align: baseline;
        }

        .dlt-form-group {
        align-items: center;
        display: flex;
        position: relative;
        width: 100%;
        }

        .dlt-form-group .dlt-text-input[type="text"] {
        padding-right: 1.8rem;
        }

        .dlt-form-group .dlt-text-input:disabled {
            cursor: not-allowed;
        }

        .dlt-form-group .dlt-text-input:invalid,
        .dlt-form-group .dlt-text-input:required {
        box-shadow: none;
        }

        .lg-input .dlt-text-input {
        height: 2.5rem;
        padding-left: 12px;
        }

        .dlt-form-group .dlt-text-input {
        background-color: #fff;
        border: 1px solid #666;
        border-radius: 0;
        color:  #333;
        display: block;
        font-family: "Roboto", "Helvetica", Arial, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        height: 2rem;
        line-height: 30px;
        padding: 0 0.5rem;
        position: relative;
        width: 100%;
        }

        .dlt-form-group input::placeholder {
        font-style: italic;
        }

        .dlt-form-group .dlt-text-input:active:enabled,
        .dlt-form-group .dlt-text-input:focus {
        border: 1px solid rgba(5, 129, 146);
        box-shadow: 0 0.18rem 0 0 transparent;
        outline: 2px solid rgba(5, 129, 146);
        outline-offset: -2px;
        }

        .dlt-form-group .clear-icon.clear-icon,
        .dlt-form-group .search-icon.clear-icon {
        display: none;
        }

        .lg-input .clear-icon {
        line-height: 2rem;
        }

        .lg-input .clear-icon {
        line-height: 2rem;
        }

        .dlt-form-group .clear-icon {
        align-items: center;
        background-color: transparent;
        border: none;
        border-radius: 0;
        color: rgb(5, 129, 146);
        cursor: pointer;
        display: inline-flex;
        font-size: 1.5rem;
        height: 1.5rem;
        justify-content: center;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        right: 0.25rem;
        text-align: center;
        text-decoration: none;
        width: 1.5rem;
        }

        .dlt-form-group .clear-icon:hover:not(:active):enabled{
            color: rgb(28, 85, 105);
        }

        .dlt-form-group .clear-icon:active:not(:disabled){
        color: rgb(5, 129, 146);
        outline: 2px solid rgb(5, 129, 146);
        outline-offset: -2px;
            background-color: rgb(197, 237, 234);
        }

        .dlt-form-group .clear-icon i {
        font-style: normal;
        font-size: 14px;
        font-weight: 800;
        }

        .dlt-form-item:hover .dlt-text-input:valid ~ .clear-icon {
        display: inline-flex;
        }

        .dlt-icon-close::before {
        content: "✖";
        }

        .dlt-form-requirement {
            align-items: center;
            display: flex;
            padding-top: 4px;
            position: relative;
            width: 100%;
        }

        [class^="dlt-icon-"]{
            font-family: 'dlt-icons' !important;
            speak: never;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .dlt-form-requirement .input-error-icon {
            font-size: var(--dlt-font-size-sm,1rem);
            color: #e0000e;
        }

        .dlt-form-requirement .error-message {
            font-size: var(--dlt-font-size-xxs,.75rem);
            font-weight: var(--dlt-font-weight-regular,400);
            line-height: var(--dlt-font-line-height-xxs,1rem);
            padding-left: .25rem;
        }

        .dlt-form-requirement::after {
            background: transparent;
            border-radius: 0 0 var(--dlt-border-radii-default,0) var(--dlt-border-radii-default,0);
            content: " ";
            height: 4px;
            left: 0;
            position: absolute;
            top: -4px;
            width: 100%;
        }

        .error-input .dlt-form-requirement::after {
            background: var(--dlt-color-system-message-error,#e0000e);
        }

        .dlt-icon-error::before {
            content: "\\e97c";
            color: #e0000e;
        }

        .dlt-form-requirement .input-error-icon::before {
            color: var(--dlt-color-system-message-error,#e0000e);
        }
    </style>
    <div class="dlt-form-item">
    <label class="dlt-form-label" for="text-input-3">Email</label>
        <div class="dlt-form-group">
            <input id="text-input-3" type="text" required aria-required="true" class="dlt-text-input" placeholder="mary@softwareag.com" aria-invalid="false">
            <button class="clear-icon" tabindex="-1" type="button" aria-label="Clear"><i class="dlt-icon-close"></i></button>
        </div>
    </div>
`

class dltTextInput extends HTMLElement {
    constructor() {
        super();

        // Attaching shadow dom and appending the code
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(dltTextInputTemplate.content.cloneNode(true));
        
        // Adding the user defined classes
        $(this.shadowRoot.querySelector('.dlt-form-item')).addClass([...this.classList].join(' '));

        // Disabling if needed
        if(this.hasAttribute('disabled')){
            this.shadowRoot.querySelector('.dlt-form-item').setAttribute('disabled','disabled');
            this.shadowRoot.querySelector('.dlt-text-input').setAttribute('disabled','true');
        }

        // Adding the label if mentioned, 
        // if not mentioned, falls back to 'Email'
        if(this.hasAttribute('label')){
            this.shadowRoot.querySelector('.dlt-form-label').textContent = this.getAttribute('label');
        }

        // Adding the placeholder if mentioned
        // if not mentioned, falls back to 'mary@softwareag.com'
        if(this.hasAttribute('placeholder')){
            this.shadowRoot.querySelector('.dlt-text-input').setAttribute('placeholder',this.getAttribute('placeholder'));
        }

        // Handling error state if specified by 'error-input' class
        if(this.classList.contains('error-input')){
            this.shadowRoot.querySelector('.dlt-text-input').setAttribute('aria-invalid','true');
            this.shadowRoot.querySelector('.dlt-text-input').setAttribute('aria-describeby','text-error');
            this.shadowRoot.querySelector('.dlt-form-item').innerHTML += `
                <div class="dlt-form-requirement" id="text-error">
                    <i class="dlt-icon-error input-error-icon"></i><span class="error-message">${this.hasAttribute('error-message')?this.getAttribute('error-message'):'Please enter a valid email'}</span>
                </div>
            `
        }
    }

    clearInputField() {
        $(this.shadowRoot.querySelector(".dlt-text-input")).val("").focus();
      }
    
      connectedCallback() {
        this.shadowRoot
          .querySelector(".dlt-form-group .clear-icon")
          .addEventListener("click", () => this.clearInputField());
      }
    
      disconnectedCallback() {
        this.shadowRoot
          .querySelector(".dlt-form-group .clear-icon")
          .removeEventListener();
      }
}
  
  window.customElements.define("dlt-text-input", dltTextInput);
