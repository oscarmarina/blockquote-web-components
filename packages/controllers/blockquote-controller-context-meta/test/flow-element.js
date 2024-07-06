import { BaseContextMetaElement } from '../src/index.js';

const consumerContext = 'symbol-for-surface';

export class FlownElement extends BaseContextMetaElement {
  static properties = {
    surface: { reflect: true },
  };

  constructor() {
    super();
    this.surface = undefined;
    this.setConsumerContext(consumerContext);
  }

  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('surface')) {
      this.controllerBaseContextMeta?.setValue(this.surface);
    }
  }
}

customElements.define('flow-element', FlownElement);
