function foo(a, b) {
  // Type checking for numbers and string conversion
  if (typeof a !== 'number' || typeof b !== 'number') {
    a = parseFloat(a) || 0; // Convert to number or default to 0 if NaN
    b = parseFloat(b) || 0; // Convert to number or default to 0 if NaN
  }
  return a + b;
}
console.log(foo(1, 2));
console.log(foo(1, "2"));
console.log(foo("1", 2));
console.log(foo("1", "2"));
console.log(foo("a", 2)); // Handles non-numeric strings gracefully
console.log(foo(1, null)); //Handles null values gracefully