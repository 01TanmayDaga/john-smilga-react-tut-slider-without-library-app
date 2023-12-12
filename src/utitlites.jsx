export const forward = (index, max) => {
  if (index == max - 1) return 0;
  return index + 1;
};

export const backward = (index, max) => {
  if (index == 0) return max - 1;
  return index - 1;
};
