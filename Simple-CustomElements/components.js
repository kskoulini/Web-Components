class dltTextInput extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="dlt-form-item ${this.getAttribute('class')}" ${this.hasAttribute('disabled')?"disabled='disabled'":''}>
                            <label class="dlt-form-label" for="text-input-3">${this.getAttribute('label')}</label>
                            <div class="dlt-form-group">
                                <input ${this.hasAttribute('disabled')?'disabled':''} id="text-input-3" type="text" required aria-required="true" class="dlt-text-input" placeholder="${this.getAttribute('placeholder')}" ${this.classList.contains('error-input')?'aria-invalid="false"':'aria-invalid="true" aria-describedby="text-error"'}>
                                <button class="clear-icon" tabindex="-1" type="button" aria-label="Clear"><i class="dlt-icon-close"></i></button>
                            </div>
                            ${
                                this.classList.contains('error-input')?
                                `<div class="dlt-form-requirement" id="text-error">
                                    <i class="dlt-icon-error input-error-icon"></i><span class="error-message">${this.getAttribute('error-message')}</span>
                                </div>`:''
                            }
                        </div>`;
        
    }
}
  
  window.customElements.define("dlt-text-input", dltTextInput);
