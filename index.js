// Capitalize the first letter of a string
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Convert a string to kebab-case
function kebabCase(str) {
  return str
    .replace(/\s+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

// Reverse a string
function reverse(str) {
  return str.split("").reverse().join("");
}

module.exports = { capitalize, kebabCase, reverse };