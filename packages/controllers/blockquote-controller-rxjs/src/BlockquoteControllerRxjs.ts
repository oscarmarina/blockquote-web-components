import type {ReactiveController, ReactiveControllerHost} from 'lit';

type ObserverLike<T> = Partial<{
  next: (value: T) => void;
  error: (error: unknown) => void;
  complete: () => void;
}>;

interface ObservableLike<T> {
  subscribe(
    observer?: ObserverLike<T> | ((value: T) => void) | null,
    options?: {signal?: AbortSignal}
  ): void;
}

interface BlockquoteControllerRxjsHost
  extends ReactiveControllerHost, Record<PropertyKey, unknown> {}

interface SubscriptionEntry<T = unknown> {
  stream$: ObservableLike<T>;
  controller: AbortController;
}

export class BlockquoteControllerRxjs implements ReactiveController {
  private subscriptions = new Map<PropertyKey, SubscriptionEntry>();

  readonly host: BlockquoteControllerRxjsHost;

  constructor(host: BlockquoteControllerRxjsHost) {
    this.host = host;
    host.addController(this);
  }

  subscribe<T>(propKey: PropertyKey, stream$: ObservableLike<T>): ObservableLike<T> {
    const existingSubscription = this.subscriptions.get(propKey);

    if (existingSubscription) {
      if (existingSubscription.stream$ === stream$) {
        return stream$;
      }

      existingSubscription.controller.abort();
    }

    const controller = new AbortController();

    stream$.subscribe(
      (state: T) => {
        if (propKey in this.host) {
          this.host[propKey] = state;
        }

        this.host.requestUpdate();
      },
      {signal: controller.signal}
    );

    this.subscriptions.set(propKey, {stream$, controller});
    return stream$;
  }

  hostDisconnected() {
    for (const {controller} of this.subscriptions.values()) {
      controller.abort();
    }

    this.subscriptions.clear();
  }
}
