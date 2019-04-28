export const generateEmptyArray = (size: number): Array<undefined> => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(undefined);
  }
  return array;
}

export const generateEmptyArrayOfArrays = (width: number, height: number): Array<Array<undefined>> => {
  const array = [];
  for (let i = 0; i < height; i++) {
    array.push(
      generateEmptyArray(width)
    );
  }
  return array;
}
