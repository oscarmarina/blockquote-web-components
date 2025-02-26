type CustomElement = HTMLElement & {
  adoptedCallback?(): void;
  attributeChangedCallback?(
    attributeName: string,
    oldValue: unknown,
    newValue: unknown,
    namespace?: string
  ): void;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
};

interface CustomElementConstructor {
  new (...params: any[]): HTMLElement & CustomElement;
}

// type Constructor<T = {}> = new (...args: any[]) => T;

export declare function MixinBase<T extends CustomElementConstructor>(superclass: T): T;
