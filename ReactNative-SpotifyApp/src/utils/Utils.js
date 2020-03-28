/* eslint-disable import/prefer-default-export */
export const numberFormater = (x) => {
  if (x < 9999 || !x) {
    return x;
  }
  if (x < 1000000) {
    return `${Math.round(x / 1000)}K`;
  }
  if (x < 10000000) {
    return `${(x / 1000000).toFixed(1)}M`;
  }
  return `${Math.round(x / 1000000)}M`;
};

export const formatArtists = (trackArtists) => {
  if (!trackArtists) return '';
  let str = trackArtists[0].name;
  for (let i = 1; i < trackArtists.length; i += 1) {
    str = str.concat(', ', trackArtists[i].name);
  }
  return str;
};
