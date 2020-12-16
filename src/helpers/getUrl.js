export const getUrl = (inputString) => {
  let regex = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
  return inputString.match(regex);
};
