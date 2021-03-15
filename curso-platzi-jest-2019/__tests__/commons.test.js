import { sum } from '../src/sum'

describe("Comparadores", () => {
  const user = {
    name: "Edgar",
    lastname: "Lopez",
  };
  const user2 = {
    name: "Edgar",
    lastname: "Lopez",
  };

  test("Equal", () => {
    expect(user).toEqual(user2);
  });

});

describe("Sum", () => {
  test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe("Truthness", () => {
  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});
