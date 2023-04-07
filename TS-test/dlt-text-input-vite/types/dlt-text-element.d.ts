import { LitElement } from 'lit';
/**
 * Delite text input element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class dltTextElement extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * `true` if the input field is required.
     */
    required: boolean;
    /**
     * `true` if the input field is disabled.
     */
    disabled: boolean;
    /**
     * `true` if the input field is invalid.
     */
    invalid: boolean;
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
    inputType: string;
    /**
     * Placeholder to be displayed inside the input element
     */
    placeholder: string;
    /**
    * Label to be displayed above the input element.
    * Defaults to 'Email'
    */
    label: string;
    /**
    * "id" of the input element.
    * Defaults to 'text-input'
    */
    id: string;
    /**
     * Defines the size of the input element.
     * Can take valuse '' | 'lg-input' | 'sm-input'
     */
    size: string;
    /**
     * Defines the size of the input element.
     * Can take valuse '' | 'lg-input' | 'sm-input'
     */
    errorMessage: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dlt-text-element': dltTextElement;
    }
}
