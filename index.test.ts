import { main } from "./index";

test("four consecutive", () => {
  const result = main();
  expect(result).toEqual([134043, 134044, 134045, 134046]);
});
