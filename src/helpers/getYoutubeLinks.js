/**
 * Extracts youtube links from a string using regex
 * @param {string} inputString String to parse for YT url's
 * @returns {string[]} An array containing youtube links if they exist
 */
export const getYoutubeLinks = (inputString) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[^&\s?]+(?!\S))\/)|(?:\S*v=|v\/)))([^&\s?]+)/gim;
  const arrayOfLinks = inputString.match(regex);
  if (arrayOfLinks) {
    return arrayOfLinks;
  } else {
    return [];
  }
};
