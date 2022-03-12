export const filterListByQuery = (list: string[] = [], query: string) => {
  return list.filter((item) => {
    return item.toLocaleLowerCase().startsWith(query.toLocaleLowerCase());
  });
};
