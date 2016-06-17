# babel-plugin-pipe-operator-curry

This work is an alternative to [babel-plugin-pipe-operator](https://github.com/miraks/babel-plugin-pipe-operator).
I choosed to implement `pipe operator` with the currying way instead of putting flow as the first callable arguments.

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

round(mean(array))
```

## Disabling in current scope

If you want to use the original pipe operator, you can disable this plugin in current scope (and it children scopes) using `"no pipe"` directive as described in the original one.

## Installation

```sh
$ npm install --save-dev babel-plugin-pipe-operator-curry
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["pipe-operator-curry"]
}
```

### Via CLI

```sh
$ babel --plugins pipe-operator-curry script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["pipe-operator-curry"]
});
```

# License

MIT
