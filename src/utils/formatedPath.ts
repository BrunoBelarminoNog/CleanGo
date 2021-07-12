export const formatedPath = (value: string): string => {
  const str = value.substr(1);
  return str[0].toUpperCase() + str.substr(1);
};
