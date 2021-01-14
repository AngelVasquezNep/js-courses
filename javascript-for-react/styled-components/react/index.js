export const component = (strings, ...dynamicValues) => (props) => {
  let newContent = [...strings];

  dynamicValues.forEach((value, index) => {
    newContent[index] += props[value];
  });

  return newContent.join("");
};
