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

test('For everything else print the number.', () => {
  expect(fizz(1)).toBe(1);
})

const output = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];

for (let i = 1; i <= 15; i++) {
  test("Complete Test: " + i + " print " + output[i - 1], () => {
    expect(fizz(i)).toBe(output[i - 1])
  })
}


