import {css} from 'lit';

export const styles = css`
  :host {
    --_mark-color: rgb(197, 197, 197);
    display: block;
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  [aria-disabled='true'] {
    opacity: 0.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    pointer-events: none;
    cursor: default;
  }

  p {
    font-size: 1.5rem;
    min-width: 4.25rem;
    text-align: center;
    margin: auto;
    padding: 0.8333em;
    background-color: var(--_mark-color);
  }

  button {
    display: inline-block;
    min-width: 9.375rem;
    font: inherit;
    cursor: pointer;
    white-space: nowrap;
    border: none;
    color: rgb(245, 245, 245);
    background-color: rgb(51, 65, 85);
    padding: 0.75em;
  }

  button:first-child:not(:only-child) {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    max-width: 25rem;
    padding: 1em 2em;
    margin: auto;
    background-color: rgb(238, 238, 238);
    border: 0.0625rem solid var(--_mark-color);
    border-bottom: none;
  }

  div + div {
    border-top: 0.0625rem dashed var(--_mark-color);
    border-bottom: 0.0625rem solid var(--_mark-color);
  }

  span {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }

  ::slotted(*) {
    white-space: nowrap;
  }
`;
