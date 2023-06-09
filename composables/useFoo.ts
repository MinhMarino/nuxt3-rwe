export const use = () => {
  return useState("foo", () => "bar");
};
