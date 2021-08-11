const hasOwn = {}.hasOwnProperty;

export default function classNames(...args: any) {
  let classes: string[] = [];

  args.forEach((arg: any) => {
    if (!arg) {
      return;
    }

    let argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (let key in arg) {
          if (typeof arg[key] === "function") {
            let result = arg[key]();
            if (result) {
              if (typeof result === "string") {
                classes.push(`${key}${result}`);
              } else {
                classes.push(key);
              }
            }
          } else if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    } else if (argType === "function") {
      let result = arg();
      if (result) {
        classes.push(result);
      }
    }
  });

  return classes.join(" ");
}
