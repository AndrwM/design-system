## UI
The styles are broken down into a few different types by folder and included in the master `manifest.scss` manifest file:

1. **Variables** There is one master variables file that exists at the stylesheet root. This file provides you with standardized type, spacing, timing, colors, etc. Keep in mind these variables affect the _whole site_.
2. **Tools** Tools are mixins or functions. Please prefix each file with its type `_mixin` or `_function`.
3. **Normalize** Prevents initial style cross-browser inconsistencies...you know the drill.
4. **Base** This file supplements any addition element styling that Normalize missed.
5. **Components** These are the meat and bones of our interface–anything visual on the page _is a component_. Component classes are constructed like this: `.c-title`, with child elements: `.c-title__subtitle`, style variants can be used like so: `.c-title.c-title--small`. Children elements of a component should never be nested inside of a different parent component, for example `.c-title -> .c-tag -> .c-title__subtitle`.
6. **Utilities** These special classes help "bully" components in one-off situations, for example: `.c-title.u-float-right`. Please take special note here, if a component uses the same utility class in more than 1 or 2 instances in the app it would be best to create a state class for that of that component instead. Also keep in mind that most layout issues can be solved with the `.c-grid` component.

### A Note On Spacing
👉 Blocks of elements need to be wrapped in `"c-section"` elements 👈 The Section component is a tiny wrapper that provides the standardized padding accross the *entire* app.

### A Note On The Grid
The grid comes from a vendor (avalanche.css)[http://colourgarden.net/avalanche/]. For comprehensive (documentation)[https://github.com/colourgarden/avalanche] see the github project. An example of use lives in the design system preview.