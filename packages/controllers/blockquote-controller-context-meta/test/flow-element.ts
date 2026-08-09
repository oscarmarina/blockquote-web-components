import {BlockquoteControllerContextMeta, BaseContextMetaElement} from '../src/index.js';
import {consumerContext} from './elements.js';
import type {PropertyValues} from 'lit';

class FlownElement extends BaseContextMetaElement {
  data: string | undefined;

  flowController!: BlockquoteControllerContextMeta<any, FlownElement>;

  static override properties = {
    data: {reflect: true},
  };

  constructor() {
    super();
    this.data = undefined;
    this.flowController = new BlockquoteControllerContextMeta(this, {context: consumerContext});
  }

  override willUpdate(props: PropertyValues<this>) {
    super.willUpdate?.(props);
    if (props.has('data')) {
      this.flowController?.setValue(this.data);
    }
  }
}

customElements.define('flow-element', FlownElement);
