import { getYoutubeLinks } from '../helpers/getYoutubeLinks';

test('Returns null', () => {
  expect(getYoutubeLinks('Qwerty')).toBe(null);
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
