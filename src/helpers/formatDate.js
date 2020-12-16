export function formatDate(dateToFormat) {
  const date = new Date(dateToFormat);
  return `${date.toLocaleDateString('en-GB')} at ${date.toLocaleTimeString()}`;
}
