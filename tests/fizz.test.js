const fizz = require('./../fizzbuzz');

test('For multiples of three print “Fizz”.', () => {
  expect(fizz(15)).toBe("FizzBuzz");
});

test('For the multiples of five print “Buzz”.', () => {
  expect(fizz(3)).toBe("Fizz");
});

test('For numbers which are multiples of both three and five print “FizzBuzz”.', () => {
  expect(fizz(5)).toBe("Buzz");
});

test('Everything else print the number.', () => {
  expect(fizz(1)).toBe(1);
})


