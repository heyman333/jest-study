const api = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(api.sum(1, 2)).toBe(3);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('the data is the word "resolve!"', (done) => {
  function callback(data) {
    expect(data).toBe("resolve!");
    done();
  }

  api.fetchData(callback);
});

test('the data is the word "resolve!"', () => {
  api.fetchData().then((data) => expect(data).toBe("resolve!"));
});

test('the data is the word "resolve!"', async () => {
  const data = await api.fetchData();
  expect(data).toBe("resolve!");
});
