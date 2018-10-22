const helpers = require('./project-1');

// start testing!

describe('tests for multiplyByTen()', () => {

  test('should multiply provided number by 10', () => {
    const expected = 50;
    const actual = helpers.multiplyByTen(5);

    expect(actual).toEqual(expected);
  });

  test('should return NaN when called with no value', () => {
    const product = helpers.multiplyByTen();

    expect(product).toBe(NaN);

    // not changing the code for this one; NaN makes more sense to me than 0 when given no input
  });

  // testing a few different input types; should throw error for any non-number

  test('should throw error when called with a string', () => {
    expect(() => {
      helpers.multiplyByTen('string');
    }).toThrow();
  });

  test('should throw error when called with a boolean', () => {
    expect(() => {
      helpers.multiplyByTen(true);
    }).toThrow();
  });

  test('should throw error when called with undefined variables', () => {
    expect(() => {
      helpers.multiplyByTen(undefinedVariable);
    }).toThrow();
  });

});

describe('tests for subtractFive()', () => {
  test('should return given number minus five', () => {
    const expected = 45;
    const actual = helpers.subtractFive(50);

    expect(actual).toEqual(expected);
  });

  test('should return NaN when called with no value', () => {
      const difference = helpers.subtractFive();

      expect(difference).toBe(NaN);
  });

  // same type-checking tests as multiplyByTen()

  test('should throw error when called with a string', () => {
    expect(() => {
      helpers.subtractFive('string');
    }).toThrow();
  });

  test('should throw error when called with a boolean', () => {
    expect(() => {
      helpers.subtractFive(true);
    }).toThrow();
  });

  test('should throw error when called with undefined variables', () => {
    expect(() => {
      helpers.subtractFive(undefinedVariable);
    }).toThrow();
  });
  
});
