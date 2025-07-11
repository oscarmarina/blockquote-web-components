import {css} from 'lit';

export const styles = css`
  /* Closed state of the dialog */
  dialog {
    opacity: 0;
    transform: translateY(16%);
    transition:
      opacity 200ms ease-out,
      transform 200ms ease-out,
      overlay 200ms ease-out allow-discrete,
      display 200ms ease-out allow-discrete;
    /* Equivalent to
    transition: all 200ms allow-discrete; */
  }

  /* Open state of the dialog */
  dialog[open] {
    opacity: 1;
    transform: translateY(0);
  }

  /* Before-open state
   Needs to be after the previous dialog[open] rule to take effect,
  as the specificity is the same */
  @starting-style {
    dialog[open] {
      opacity: 0;
      transform: translateY(16%);
    }
  }

  /* Transition the :backdrop when the dialog modal is promoted to the top layer */
  dialog::backdrop {
    background-color: rgb(120, 120, 120, 0);
    transition:
      display 190ms ease-in allow-discrete,
      overlay 190ms ease-in allow-discrete,
      background-color 190ms;
    /* Equivalent to
    transition: all 190ms allow-discrete; */
  }

  dialog[open]::backdrop {
    background-color: rgb(120, 120, 120, 0.25);
  }

  /* This starting-style rule cannot be nested inside the above selector
  because the nesting selector cannot represent pseudo-elements. */
  @starting-style {
    dialog[open]::backdrop {
      background-color: rgb(120, 120, 120, 0);
    }
  }
`;
