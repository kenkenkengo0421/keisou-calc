# PsychroLib

### *Library of psychrometric functions to calculate thermodynamic properties of air for JavaScript*

This creates an npm package for the [PsychroLib](https://github.com/psychrometrics/psychrolib) library. Please bring up any issues, bug reports, or feature requests eith PsychroLib directly in the PsychroLib repository.

## Links

- [Original Repo](https://github.com/psychrometrics/psychrolib)
- [NPM Package](https://www.npmjs.com/package/psychrolib)

## Usage

See the PsychroLib repository to learn how to use PsychroLib.

### Installation

```shell
npm i psychrolib@latest
```

### Module

```js
import psychrolib from 'psychrolib';
```

### CommonJS

```js
const psychrolib = require('psychrolib');
```

## Updating This Package

Because physics/thermodynamics rarely changes, the PsychroLib library is stable. In the event that changes are made to the PsychroLib source code, the corresponding NPM package can be updated using the following commands, which will trigger the publishing workflow:

```shell
npm version <major|minor|patch>
git push
```

## Disclaimer

I am an independent creator, not affiliated with the original contributors to the PsychroLib repository or ASHRAE. This package is a direct copy of the JavaScript source code and published manually to NPM. All credit is deserved to the original contributors of PsychroLib.