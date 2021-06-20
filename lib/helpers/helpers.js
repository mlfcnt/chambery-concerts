export const capitalizeFirstLetter = (string, type) => {
  if (type === 'sentence') {
    const stringtoUppercase = string.split(' ')[0];
    return stringtoUppercase.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  const newString = string.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};
