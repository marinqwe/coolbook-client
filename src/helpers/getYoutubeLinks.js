export const getYoutubeLinks = (inputString) => {
  let regex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
  return inputString.match(regex);
};
