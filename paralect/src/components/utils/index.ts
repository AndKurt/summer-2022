export const numberRounding = (num: number) => {
  switch (true) {
    case num < 1000:
      return num;
    case num > 999 && num < 1000000:
      return `${(num / 1000).toFixed(1)}k`;
    case num > 99999:
      return `${(num / 1000000).toFixed(1)}m`;
    default:
      return;
  }
};
