export const stringToFormatedDate = (dateString: string) => {
  let date = new Date(dateString);
  return `${date.toLocaleString('en-US', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`;
}
