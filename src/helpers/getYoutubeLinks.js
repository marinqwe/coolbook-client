/**
 * Extracts youtube links from a string using regex
 * @param {string} inputString String to parse for YT url's
 * @returns {Array} An array containing youtube links if they exist, otherwise null
 */
export const getYoutubeLinks = (inputString) => {
  const regex = /http(s)?:\/\/www\.youtube\.com\/watch\?v=([^\\\. <>]+)/gim;
  const reg = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[^&\s\?]+(?!\S))\/)|(?:\S*v=|v\/)))([^&\s\?]+)/gmi
  return inputString.match(reg);
};
