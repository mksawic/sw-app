import { convertToCamel } from "./utils";

test("convert to camel case", () => {
  const converted = convertToCamel({
    "kebab-case": "",
    PascalCase: "",
    camelCase: "",
    Number123Key: "",
    snake_case: "",
  });
  const regex = /[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/;
  const keys = Object.keys(converted);
  expect(keys.every((value) => regex.test(value))).toBe(true);
});
