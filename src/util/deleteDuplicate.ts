export const deleteDuplicate = <T>(array: T[], arrayFilter: T[]): T[] => {
  array.forEach((temper) => {
    let exist = false;
    arrayFilter.forEach((uniqueTemper) => {
      if (temper === uniqueTemper) {
        exist = true;
      }
    });
    if (!exist) {
      arrayFilter.push(temper);
    }
  });

  return arrayFilter;
};
