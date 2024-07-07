import { BaseContextMetaElement } from '../src/index.js';

const consumerContext = 'symbol-for-surface';

class FlownElement extends BaseContextMetaElement {
  static properties = {
    surface: { reflect: true },
  };

  constructor() {
    super();
    this.surface = undefined;
    this.flowController = this.initOrGetContextProvider(consumerContext);
  }

  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('surface')) {
      this.flowController?.setValue(this.surface);
    }
  }
}

customElements.define('flow-element', FlownElement);
