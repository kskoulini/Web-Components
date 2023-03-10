# Delite Reference Implementation

The Delite Design System empowers you to build delightful enterprise experiences efficiently and joyfully. The UI components, patterns, and best practices provide you with a unified language when designing and developing products within the Software AG ecosystem.

## Tech

Installing this cover package will install the 4 implementation packages for this Delite release and the (few) third-party dependencies. See package.json for the respective versions.

The packages are verified against the LTS (even-numbered) versions of node.js. See "engines" in package.json of dlt-components.
If you want to override the engine dependencies, use the --ignore-engines option.

The Delite reference implementation consists of:

### @softwareag/dlt-components
The framework-agnostic implementation of all components that comprise the Delite design system, including  a showcase.
### @softwareag/dlt-tokens
The design tokens defining values for all aspects of styling and layout, including both Delite 1.0 and Delite 2.0 color schemes.
### @softwareag/dlt-fonts
The standard fonts used with Delite.
### @softwareag/dlt-icons
The core delite icon collection, as fonts, SVG sprites, and individual SVGs.

## License of this package
[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)

## Copyrights and licenses of dependencies
See file in package Third-Party-Terms-of-Dependencies.pdf
