const { toLower, deburr, words, join, curry, compose, flow } = require("lodash/fp");

describe("Function composition", () => {
  describe("Given toLower, deburr, words, and join implement function to create a slug", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // slugify :: String -> String

    const slugify = (str) => join('-', words(toLower(deburr(str))))

    /***************************************************************/

    test("changes title into a safe slug", () => {
      const result = slugify("River Café: 40 Years of Feasts and Firsts");
      expect(result).toEqual("river-cafe-40-years-of-feasts-and-firsts");
    });
  });

  describe("Compose toLower, deburr, words, and join using compose function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // slugify :: String -> String

    const slugify = (str) => compose(compose(join)('-'), words, deburr, toLower)(str)

    /***************************************************************/

    test("changes title into a safe slug", () => {
      const result = slugify("River Café: 40 Years of Feasts and Firsts");
      expect(result).toEqual("river-cafe-40-years-of-feasts-and-firsts");
    });
  });

  describe("Compose toLower, deburr, words, and join using flow function", () => {
    /********************* YOUR IMPLEMENTATION *********************/

    // slugify :: String -> String

    const slugify = (str) => flow(toLower, deburr, words, flow(join)('-'))(str)

    /***************************************************************/

    test("changes title into a safe slug", () => {
      const result = slugify("River Café: 40 Years of Feasts and Firsts");
      expect(result).toEqual("river-cafe-40-years-of-feasts-and-firsts");
    });
  });
});
