import {css} from 'lit';

export const styles = css`
  dialog {
    opacity: 0;
    transform: translateY(16%);
    transition:
      opacity 200ms ease-out,
      transform 200ms ease-out;
  }

  @supports (transition-behavior: allow-discrete) {
    dialog {
      transition:
        opacity 200ms ease-out,
        transform 200ms ease-out,
        overlay 200ms ease-out allow-discrete,
        display 200ms ease-out allow-discrete;
    }
  }

  /* [open state] */
  dialog[open] {
    opacity: 1;
    transform: translateY(0);
  }

  /* Before - [open state] Needs to be after the previous dialog[open] rule to take effect, as the specificity is the same */
  @starting-style {
    dialog[open] {
      opacity: 0;
      transform: translateY(16%);
    }
  }

  /* Transition the :backdrop when the dialog modal is promoted to the top layer */
  dialog::backdrop {
    background-color: rgb(120, 120, 120, 0);
    transition: background-color 190ms ease-in;
  }

  @supports (transition-behavior: allow-discrete) {
    dialog::backdrop {
      transition:
        display 190ms ease-in allow-discrete,
        overlay 190ms ease-in allow-discrete,
        background-color 190ms ease-in;
    }
  }

  dialog[open]::backdrop {
    background-color: rgb(120, 120, 120, 0.2);
  }

  @starting-style {
    dialog[open]::backdrop {
      background-color: rgb(120, 120, 120, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    dialog {
      transition: none !important;
      transform: none !important;
    }

    dialog[open] {
      transform: none !important;
    }

    dialog::backdrop,
    dialog[open]::backdrop {
      transition: none !important;
    }
  }
`;
