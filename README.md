@investorphem/string-tools

   


---

Description

@investorphem/string-tools is a lightweight and robust collection of string utility functions for JavaScript developers. It includes commonly needed functions like capitalizing strings, converting to kebab-case, and reversing strings.

Installation

npm install @investorphem/string-tools

Usage

const { capitalize, kebabCase, reverse } = require('@investorphem/string-tools');

console.log(capitalize('hello')); // Hello
console.log(kebabCase('Hello World')); // hello-world
console.log(reverse('abc')); // cba

Functions

capitalize(str)

Capitalizes the first letter of the given string.

capitalize('hello'); // Hello

kebabCase(str)

Converts a string to kebab-case.

kebabCase('Hello World'); // hello-world

reverse(str)

Reverses the string.

reverse('abc'); // cba

Contributing

Contributions are welcome! Please fork the repository and submit pull requests. Ensure all tests pass before submitting.

License

This project is licensed under the MIT License.

Badges Explained

npm version: Shows the latest version on npm.

npm downloads: Shows total downloads from npm.

License: Shows the license type.

Build Status: Shows GitHub Action status for auto-publishing.



---

Maintained by Oluwafemi Olagoke