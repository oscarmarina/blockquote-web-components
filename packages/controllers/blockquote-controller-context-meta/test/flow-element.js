import {BlockquoteControllerContextMeta, BaseContextMetaElement} from '../src/index.js';
import {consumerContext} from './elements.js';

class FlownElement extends BaseContextMetaElement {
  static properties = {
    data: {reflect: true},
  };

  constructor() {
    super();
    this.data = undefined;
    this.flowController = new BlockquoteControllerContextMeta(this, {context: consumerContext});
  }

  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('data')) {
      this.flowController?.setValue(this.data);
    }
  }
}

customElements.define('flow-element', FlownElement);
