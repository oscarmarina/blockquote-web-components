type CustomElement = HTMLElement & {
  adoptedCallback?(): void;
  attributeChangedCallback?(
    attributeName: string,
    oldValue: any,
    newValue: any,
    namespace?: any,
  ): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

type Constructor<T = {}> = new (...args: any[]) => T;

export declare function MixinBase<T extends Constructor<any>>(superclass: T): T & CustomElement;
