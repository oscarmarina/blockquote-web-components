# blockquote-foundations-sass

Set of functions and mixins which help in the development of `web-component` SCSS.

---

## function `rem()`

Converts pixels to ems.
if the parent is another value say 24px write em(12px, 24px)

Usage:

```
font-size: em(14px);
```

```
font-size: em(14px, 24px);
```

---

## function `rem()`

Converts pixels to rems.

Usage:

```
font-size: rem(14px);
```

---

## mixin `visuallyhidden`

Hides on-screen elements without hiding them to screen readers.
We recommend to apply this mixin to classes named `visuallyhidden` or `sr-only`.

Usage:

```
.visuallyhidden {
  @include visuallyhidden;
}
```

---

## mixin `inset`

Add inset properties of IE11 support

Usage:

```
element { @include inset; }
```

---

## mixin `list-unstyled`

Removes margin, padding and list-style. This mixin should be applied to `<ul>` or `<ol>` elements.

Usage:

```
ul { @include list-unstyled; }
```
