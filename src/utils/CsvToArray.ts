export const csvToArray = (
  str: string,
  delimiter = `","`
): Record<string, any>[] => {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(1, str.indexOf('\n') - 1).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf('\n') + 1).split('\n');

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map((row) => {
    const values = row.slice(1, row.length - 1).split(delimiter);
    const el = headers.reduce<Record<string, string | Number>>(function (
      object,
      header,
      index
    ) {
      const value = values[index];
      object[header] = isNaN(value as any) ? value : parseFloat(value);
      return object;
    },
    {});
    return el;
  });

  // return the array
  return arr;
};
