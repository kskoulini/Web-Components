import { ifDefined } from '../node_modules/lit/directives/if-defined';

/**
 * A variant of `lit-html/directives/if-defined` which stops rendering if the given value is `null` in addition to `undefined`.
 * @param The value.
 */
export default (value:any) => ifDefined(value ?? undefined);