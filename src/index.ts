
export default async function (): Promise<object> {
  const foo = { "bar": "" };
  const { bar, ...baz } = foo;
  const qux = { ...baz, bar };
  return qux;
}
