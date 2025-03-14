import { ReactiveController, ReactiveControllerHost } from 'lit';
import { Context, ContextType } from '@lit/context';
export declare const contextMetaSymbol = 'context-meta-symbol';

declare class ContextMeta<
  TMeta extends Context<unknown, unknown>,
  HostElement extends ReactiveControllerHost & HTMLElement,
> implements ReactiveController
{
  private host;
  private context?;
  private initialValue?;
  private callback?;
  private _contextMetaProvider;
  private _contextMetaConsumer;
  constructor(
    host: HostElement,
    {
      context,
      initialValue,
      callback,
    }: {
      context?: unknown;
      initialValue?: ContextType<TMeta>;
      callback?: (v: ContextType<TMeta>, dispose?: () => void) => void;
    },
  );
  get value(): ContextType<TMeta> | undefined;
  setValue(v: ContextType<TMeta>, force?: boolean): void;
  hostConnected(): Promise<void>;
}

export { ContextMeta as BlockquoteControllerContextMeta };
