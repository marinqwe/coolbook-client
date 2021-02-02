import { getYoutubeLinks } from '../helpers/getYoutubeLinks';

describe('Get Youtube links function', () => {
  test('No input returns an empty array', () => {
    expect(getYoutubeLinks('')).toEqual([]);
  });

  test('A string without a link returns an empty array', () => {
    expect(getYoutubeLinks('Qwerty')).toEqual([]);
  });

  test('A single link returns an array with the link', () => {
    const stringToParse = 'www.youtube.com/watch?v=FgnxcUQ5vho';
    const expectedArray = ['www.youtube.com/watch?v=FgnxcUQ5vho'];

    expect(getYoutubeLinks(stringToParse)).toEqual(expectedArray);
  });

  test('A single link and a string returns an array with the link', () => {
    const stringToParse = 'www.youtube.com/watch?v=FgnxcUQ5vho something321';
    const expectedArray = ['www.youtube.com/watch?v=FgnxcUQ5vho'];

    expect(getYoutubeLinks(stringToParse)).toEqual(expectedArray);
  });

  test('Returns an array containing youtube links', () => {
    const stringToParse =
      'One www.youtube.com/watch?v=FgnxcUQ5vho Two youtu.be/FgnxcUQ5vho Three https://www.youtube.com/watch?v=FgnxcUQ5vho Four youtube.com/watch?v=FgnxcUQ5vho';
    const expectedArray = [
      'www.youtube.com/watch?v=FgnxcUQ5vho',
      'youtu.be/FgnxcUQ5vho',
      'https://www.youtube.com/watch?v=FgnxcUQ5vho',
      'youtube.com/watch?v=FgnxcUQ5vho',
    ];

    expect(getYoutubeLinks(stringToParse)).toEqual(expectedArray);
  });
});
