import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { classMap } from '../../../node_modules/lit/directives/class-map';
import { BUTTON_VARIANT, BUTTON_SIZE } from './defs';
import ifNonNull from '../../if-non-null';
import style from './buttons.scss';

/** 
 * An example element.ß
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('dlt-button')

export class DltButton extends LitElement {
  static override styles = style;

   /**
    * `true` if there is a non-icon content.
    */
  //  private hasMainContent = true;

 /**
   * `true` if the button should have input focus when the page loads.
   */
  @property({ type: Boolean, reflect: true })
  autofocus = false;

  /**
   * `true` if the button should be disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * The default file name, used if this button is rendered as `<a>`.
   */
  @property({ reflect: true })
  download!: string;

  /**
   * Link `href`. If present, this button is rendered as `<a>`.
   */
  @property({ reflect: true })
  href!: string;

  /**
   * The language of what `href` points to, if this button is rendered as `<a>`.
   */
  @property({ reflect: true })
  hreflang!: string;

  /**
   * Button icon layout.
   */
  @property({ type: Boolean, reflect: true, attribute: 'show-icon' })
  iconLayout = false;

  /**
   * Button icon only layout.
   */
   @property({ type: Boolean, reflect: true, attribute: 'icon-only' })
   iconOnly = false;

  /**
   * `true` if expressive theme enabled.
   */
  @property({ type: Boolean, reflect: true })
  isExpressive = false;

  /**
   * Button variant.
   */
  @property({ reflect: true })
  variant = BUTTON_VARIANT.PRIMARY;

  /**
   * The a11y role for `<a>`.
   */
  @property({ attribute: 'link-role' })
  linkRole = 'button';

  /**
   * Icon name for icon button
   */
   @property({ attribute: 'icon' })
   icon = '';

  /**
   * URLs to ping, if this button is rendered as `<a>`.
   */
  @property({ reflect: true })
  ping!: string;

  /**
   * The link type, if this button is rendered as `<a>`.
   */
  @property({ reflect: true })
  rel!: string;

  /**
   * Button size.
   */
  @property({ reflect: true })
  size = BUTTON_SIZE.REGULAR;

  /**
   * The link target, if this button is rendered as `<a>`.
   */
  @property({ reflect: true })
  target!: string;

  /**
   * The default behavior if the button is rendered as `<button>`. MIME type of the `target`if this button is rendered as `<a>`.
   */
  @property({ reflect: true })
  type!: string;

  render() {
    const {
      autofocus,
      disabled,
      download,
      href,
      hreflang,
      isExpressive,
      linkRole,
      variant,
      ping,
      rel,
      size,
      target,
      type,
      icon,
      iconOnly
    } = this;
    
    const classes = classMap({
      [`dlt-button`]: true,
      [`dlt-button-${variant}`]: variant,
      [`dlt-button--disabled`]: disabled,
      [`dlt-button-icon`]: iconOnly,
      [`dlt-button--sm`]: size === 'sm' && !isExpressive,
      [`dlt-button--lg`]: size === 'lg',
    });

    const icon_class = classMap({
      [`dlt-icon--lg`]: !iconOnly,
      [`dlt-icon`]: iconOnly,
      [icon] : icon
    });

    if (href) {
      return disabled
        ? html`
            <p id="button" part="button" class="${classes}">
              <slot></slot>
            </p>
          `
        : html`
            <a
              id="button"
              part="button"
              role="${ifNonNull(linkRole)}"
              class="${classes}"
              download="${ifNonNull(download)}"
              href="${ifNonNull(href)}"
              hreflang="${ifNonNull(hreflang)}"
              ping="${ifNonNull(ping)}"
              rel="${ifNonNull(rel)}"
              target="${ifNonNull(target)}"
              type="${ifNonNull(type)}">
              <slot></slot>
            </a>
          `;
    }

    return icon
    ? html`
      <button
        id="button"
        part="button"
        class="${classes}"
        ?autofocus="${autofocus}"
        ?disabled="${disabled}"
        type="${ifNonNull(type)}">
        <i class="${icon_class}"></i>
        <slot></slot>
      </button>
    `
    : html`
    <button
      id="button"
      part="button"
      class="${classes}"
      ?autofocus="${autofocus}"
      ?disabled="${disabled}"
      type="${ifNonNull(type)}">      
      <slot></slot>
    </button>
  `
  }

}

export default DltButton;
