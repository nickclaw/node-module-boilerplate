
export default async function () {
  const foo = {};
  const { bar, ...baz } = foo;
  const qux = { ...baz, bar };
  return qux;
}
