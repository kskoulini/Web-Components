import { LitElement } from 'lit';
import { BUTTON_VARIANT, BUTTON_SIZE } from './defs';
/**
 * An example element.ß
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class DltButton extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * `true` if there is a non-icon content.
     */
    private hasMainContent;
    /**
      * `true` if the button should have input focus when the page loads.
      */
    autofocus: boolean;
    /**
     * `true` if the button should be disabled.
     */
    disabled: boolean;
    /**
     * The default file name, used if this button is rendered as `<a>`.
     */
    download: string;
    /**
     * Link `href`. If present, this button is rendered as `<a>`.
     */
    href: string;
    /**
     * The language of what `href` points to, if this button is rendered as `<a>`.
     */
    hreflang: string;
    /**
     * Button icon layout.
     */
    iconLayout: boolean;
    /**
     * Button icon only layout.
     */
    iconOnly: boolean;
    /**
     * `true` if expressive theme enabled.
     */
    isExpressive: boolean;
    /**
     * Button variant.
     */
    variant: BUTTON_VARIANT;
    /**
     * The a11y role for `<a>`.
     */
    linkRole: string;
    /**
     * Icon name for icon button
     */
    icon: string;
    /**
     * URLs to ping, if this button is rendered as `<a>`.
     */
    ping: string;
    /**
     * The link type, if this button is rendered as `<a>`.
     */
    rel: string;
    /**
     * Button size.
     */
    size: BUTTON_SIZE;
    /**
     * The link target, if this button is rendered as `<a>`.
     */
    target: string;
    /**
     * The default behavior if the button is rendered as `<button>`. MIME type of the `target`if this button is rendered as `<a>`.
     */
    type: string;
    render(): import("lit-html").TemplateResult<1>;
}
export default DltButton;
