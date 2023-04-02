export function classNames(...args) {
  var a = args
    .reduce((acc, val) => {
      if (typeof val === "string") return acc.concat(val.split(" "));
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
  return a;
}
