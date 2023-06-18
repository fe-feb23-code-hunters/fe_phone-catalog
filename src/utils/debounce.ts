export const debounce = (fn: any, t: number) => {
  let timer: null | NodeJS.Timeout = null;

  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
