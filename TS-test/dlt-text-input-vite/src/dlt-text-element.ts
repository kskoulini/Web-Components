import { LitElement, html } from 'lit'
import { unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from '/src/assets/text-inputs.scss?inline';

/**
 * Delite text input element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('dlt-text-element')
export class dltTextElement extends LitElement {

  static styles = unsafeCSS(styles);

  /**
   * `true` if the input field is required.
   */
  @property({ type: Boolean, reflect: true, attribute: 'required' })
  required = false;


  /**
   * `true` if the input field is disabled.
   */
  @property({ type: Boolean, reflect: true, attribute: 'disabled' })
  disabled = false;


  /**
   * `true` if the input field is invalid.
   */
  @property({ type: Boolean, reflect: true, attribute: 'invalid' })
  invalid = false;
  

  /**
   * The type of the input field.
   * (attribute) type: 
   * "hidden" | "text" | "search" | "tel" | "url" | 
   * "email" | "password" | "datetime" | "date" | 
   * "month" | "week" | "time" | "datetime-local" | 
   * "number" | "range" | "color" | "checkbox" | 
   * "radio" | "file" | "submit" | "image" | 
   * "reset" | "button" |
   * 'text' by default.
   */
  @property({ type: String, reflect: true, attribute: 'text' })
  inputType = 'text'


  /**
   * Placeholder to be displayed inside the input element
   */
  @property({ type: String, reflect: true, attribute: 'placeholder' })
  placeholder = "mary@softwareag.com";


   /**
   * Label to be displayed above the input element.
   * Defaults to 'Email'
   */
   @property({ type: String, reflect: true, attribute: 'label' })
   label = "Email";


   /**
   * "id" of the input element.
   * Defaults to 'text-input'
   */
   @property({ type: String, reflect: true, attribute: 'id' })
   id = "text-input";


  /**
   * Defines the size of the input element.
   * Can take valuse '' | 'lg-input' | 'sm-input'
   */
  @property({ type: String, reflect: true, attribute: 'size' })
  size = '';


  /**
   * Defines the size of the input element.
   * Can take valuse '' | 'lg-input' | 'sm-input'
   */
  @property({ type: String, reflect: true, attribute: 'error-message' })
  errorMessage = 'Please enter a valid input';


  render() {

    const {
      inputType,
      invalid,
      disabled,
      required,
      placeholder,
      label,
      id,
      errorMessage
    } = this;

    // const componentClasses = classMap({
    //   [`dlt-form-item`]: true,
    //   [`${size}`]: size
    // });
    const componentClasses = 'dlt-form-item'

    if (disabled){
      return html`
        <div class="${componentClasses}" dsiabled="disabled">
        <label class="dlt-form-label" for="${id}">${label}</label>
            <div class="dlt-form-group">
                <input id="${id}" type="${inputType}" required aria-required="true" class="dlt-text-input" placeholder=${placeholder} aria-invalid="false"  ?disabled="${disabled}">
                <button class="clear-icon" tabindex="-1" type="button" aria-label="Clear"><i class="dlt-icon-close"></i></button>
            </div>
        </div>
        ${
          invalid?
          html`
            <div class="dlt-form-requirement" id="text-error">
              <i class="dlt-icon-error input-error-icon"></i><span class="error-message">${this.hasAttribute('error-message')?this.getAttribute('error-message'):'Please enter a valid email'}</span>
            </div>
          `:``
        }
      `
    }
    else{
      return html`
        <link rel="stylesheet" type="text/css" href="/src/dlt-icons-font.css"/>
        <div class="${componentClasses}">
        <label class="dlt-form-label" for="${id}">${label}</label>
            <div class="dlt-form-group">
                <input id="${id}" type="${inputType}" ?required="${required}" aria-required="true" class="dlt-text-input" placeholder=${placeholder} aria-invalid="false">
                <button class="clear-icon" tabindex="-1" type="button" aria-label="Clear"><i class="dlt-icon-close"></i></button>
            </div>
        </div>
        ${
          invalid?
          html`
            <div class="dlt-form-requirement" id="text-error">
              <i class="dlt-icon-error input-error-icon"></i><span class="error-message">${errorMessage}</span>
            </div>
          `:``
        }
      `
    }
  }

  // private _onClick() {
  //   this.count++
  // }

  // static styles = css`
  //   :host {
  //     max-width: 1280px;
  //     margin: 0 auto;
  //     padding: 2rem;
  //     text-align: center;
  //   }

  //   .logo {
  //     height: 6em;
  //     padding: 1.5em;
  //     will-change: filter;
  //     transition: filter 300ms;
  //   }
  //   .logo:hover {
  //     filter: drop-shadow(0 0 2em #646cffaa);
  //   }
  //   .logo.lit:hover {
  //     filter: drop-shadow(0 0 2em #325cffaa);
  //   }

  //   .card {
  //     padding: 2em;
  //   }

  //   .read-the-docs {
  //     color: #888;
  //   }

  //   h1 {
  //     font-size: 3.2em;
  //     line-height: 1.1;
  //   }

  //   a {
  //     font-weight: 500;
  //     color: #646cff;
  //     text-decoration: inherit;
  //   }
  //   a:hover {
  //     color: #535bf2;
  //   }

  //   button {
  //     border-radius: 8px;
  //     border: 1px solid transparent;
  //     padding: 0.6em 1.2em;
  //     font-size: 1em;
  //     font-weight: 500;
  //     font-family: inherit;
  //     background-color: #1a1a1a;
  //     cursor: pointer;
  //     transition: border-color 0.25s;
  //   }
  //   button:hover {
  //     border-color: #646cff;
  //   }
  //   button:focus,
  //   button:focus-visible {
  //     outline: 4px auto -webkit-focus-ring-color;
  //   }

  //   @media (prefers-color-scheme: light) {
  //     a:hover {
  //       color: #747bff;
  //     }
  //     button {
  //       background-color: #f9f9f9;
  //     }
  //   }
  // `
}

declare global {
  interface HTMLElementTagNameMap {
    'dlt-text-element': dltTextElement
  }
}
