const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    "parser": "babel-eslint",
    "plugins": ["react", "jsx-a11y", "import", "prettier"],
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "rules": {
        "prettier/prettier": ["error", prettierOptions],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "env": {
        "jest": true,
        "browser": true,
    }
};

