export const parseWeight = (weightStr: string) => {
  const regex = /(\d+)/;
  const match = weightStr.match(regex);

  if (match) {
    return parseInt(match[1], 10);
  } else {
    return 5; // Valor predeterminado si no se encuentra un número válido
  }
};
