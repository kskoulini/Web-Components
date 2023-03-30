class RatingElement extends HTMLElement {
    constructor() {
        super();
        this._rating = 0;
        this._vote = null;
        this._boundOnUpClick = this._onUpClick.bind(this);
        this._boundOnDownClick = this._onDownClick.bind(this);
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'});
        const templateContent = document.getElementById('rating-element-template').content;
        const clonedContent = templateContent.cloneNode(true);
        shadowRoot.appendChild(clonedContent);
     
        this.shadowRoot.querySelector('.rating').innerText = this.rating;
        this.shadowRoot.querySelector('.thumb_up').addEventListener('click', this._boundOnUpClick);
        this.shadowRoot.querySelector('.thumb_down').addEventListener('click', this._boundOnDownClick);
    }
    
    /*
        Setter of the rating property. 
        Called when we want to set the property.
        Called when we try to do document.querySelector('rating-element').setAttribute('rating',<some-value>);
    */
    set rating(value) {
        this._rating = value;
        if (!this.shadowRoot) {
            return;
        }
        
        const ratingEl = this.shadowRoot.querySelector('.rating');
        if (ratingEl) {
          ratingEl.innerText = this._rating;
        }
    }

    /*
        Getter or the rating property. 
        Callled when we want to retreive the property.
        Called when we try to do document.querySelector('rating-element').getAttribute('rating');
    */
    get rating() {
        return this._rating;
    }

    // Called when we try to do document.querySelector('rating-element').setAttribute('vote',<some-value>);
    set vote(newValue) {
        const oldValue = this._vote;
        if (newValue === oldValue) {
          return;
        }
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
        this._vote = newValue;
        this.setAttribute('vote', newValue);
    }
    
    // Called when we try to do document.querySelector('rating-element').getAttribute('vote');
    get vote() {
        return this._vote;
    }

    /*  
        In order for the attributeChangedCallback to trigger, 
        you must set a static getter for RatingElement.observedAttributes 
        which defines the attributes to be observed for changes.
        In our case, the attributes to be observed would be the "rating" and "vote" attribute
        that holds the current rating.
        Hence, the function returns a list with a single value, 'rating'.
    */
    static get observedAttributes() {
        return ['rating', 'vote'];
    }

    /*
        Web Component lifecycle includes the attributeChangedCallback.
        This is the function that is called whenever modification of an attribute
        like rating on <rating-element rating="0"></rating-element> is performed. 
    */
    attributeChangedCallback(attributeName, oldValue, newValue) {
        if (attributeName === 'rating') {
            const newRating = Number(newValue);
        
            this.rating = newRating;
        } else if (attributeName === 'vote') {
            this.vote = newValue;
        }
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.thumb_up').removeEventListener('click', this._boundOnUpClick);
        this.shadowRoot.querySelector('.thumb_down').removeEventListener('click', this._boundOnDownClick);
    }
    
    _onUpClick() {
        this.vote = 'up';
    }
    
    _onDownClick() {
        this.vote = 'down';
    }

}
   
customElements.define('rating-element', RatingElement);