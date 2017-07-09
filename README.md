# sequelize-models-charger

A module for charger the models of sequelize.

## Installation

This package is available via `npm`, exectute the simple command:

```shell
npm install sequelize-models-charger
```

## Usage

This module is a simple function, see an example of use:

```js
const modelsCharger = require('sequelize-models-charger')
const models = modelsCharger(path.join(__dirname, 'your-path-models'), { sequelize })
```

For more documentation see the file `index.js`.

## Test

Execute the command `npm test` for test the package with mocha.