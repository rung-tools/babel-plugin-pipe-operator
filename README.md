# @rung/babel-plugin-pipe-operator

This work is a fork of a fork. It's based on https://github.com/Swizz/babel-plugin-pipe-operator-curry,
however, it integrates without problems with other plugins.

## Examples

```javascript
import { mean, round } from 'lodash';

const array = [1, 2, 3, 4, 5];

array
| mean
| round
```

Turn into

```javascript
import { mean, round } from 'lodash';

const array = [1, 2, 3, 4, 5];

(round)((mean)(array))
```

## Disabling in current scope

If you want to use the original pipe operator, you can disable this plugin in current scope (and it children scopes) using `"no pipe"` directive as described in the original one.

## Installation

```sh
$ npm install --save-dev @rung/babel-plugin-pipe-operator
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["@rung/pipe-operator-curry"]
}
```

### Via CLI

```sh
$ babel --plugins @rung/pipe-operator-curry script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["@rung/pipe-operator-curry"]
});
```

# License

MIT
