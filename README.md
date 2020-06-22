# consencss

## Preface

TODO: expand with more info

> First and foremost, I have grown more and more interested in styling libraries that act as a toolkit for design systems, with libraries like Styled System, Tailwind and Tachyons being the most notable cases. Combine that with a desire to know how CSS-in-JS libraries "work behind the scenes", this felt like an opportunity combine both and to take a look whether performance can be improved (with which cxs seems like on of the coolest methods of implementation).

## Goal

`consencss` is a styling library that can help you:

1. style your website/app
1. create a CSS library like Bootstrap, Material, etc.
1. create a design system for your websites/apps/company
1. create an (un)opinionated library that allows you (and others) to create design systems

**If you happen to come across this library, you should think twice about using it in its current state in production!!**

Of the current goals:

- 1 would be the closest to possible. But there are currently no media queries.
- 2 would be next, but there is no built in CSS reset available.
- 3 and 4 are far from done, there is no configuration possible - let alone generating CSS files from used styles.

The idea is to not only be able to use this at runtime, but also to be able generate a CSS file with all styles/configurations (mandatory for isomorphic applications).

## Conclusion

In short, if this ever makes it: it still has a long way to go.

Coming to an npm near you soon(ish).
