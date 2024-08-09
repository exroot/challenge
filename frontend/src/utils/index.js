export const convertToPlainArray = (arr) => {
  let lines = [];

  if (!Array.isArray(arr)) arr = [arr];

  arr.forEach((line) => {
    const toAdd = line.lines.map((ln) => {
      return {
        ...ln,
        filename: line.file,
      };
    });
    lines = [...lines, ...toAdd];
  });

  return lines;
};
