const isQueryEmpty = (query: string): boolean => {
  return query === '' || [...query].every((x) => x === ' ');
};

export default isQueryEmpty;
