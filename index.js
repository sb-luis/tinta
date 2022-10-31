const MIN_LEN = 5;
const MAX_LEN = 20;
const DEFAULT_DICT = [
  'at',
  'vero',
  'eos',
  'et',
  'accusamus',
  'iusto',
  'odio',
  'dignissimos',
  'ducimus',
  'qui',
  'blanditiis',
  'praesentium',
  'voluptatum',
  'deleniti',
  'atque',
  'corrupti',
  'quos',
  'dolores',
  'quas',
  'molestias',
  'excepturi',
  'sint',
  'occaecati',
  'cupiditate',
  'non',
  'provident',
  'similique',
  'sunt',
  'in',
  'culpa',
  'officia',
  'deserunt',
  'mollitia',
  'animi',
  'id',
  'est',
  'laborum',
  'dolorum',
  'fuga',
  'et',
  'harum',
  'quidem',
  'rerum',
  'facilis',
  'expedita',
  'distinctio',
  'nam',
  'libero',
  'tempore',
  'cum',
  'soluta',
  'nobis',
  'eligendi',
  'optio',
  'cumque',
  'nihil',
  'impedit',
  'quo',
  'minus',
  'quod',
  'maxime',
  'placeat',
  'facere',
  'possimus',
  'omnis',
  'voluptas',
  'assumenda',
  'dolor',
  'repellendus',
  'temporibus',
  'autem',
  'quibusdam',
  'aut',
  'officiis',
  'debitis',
  'necessitatibus',
  'saepe',
  'eveniet',
  'ut',
  'voluptates',
  'repudiandae',
  'molestiae',
  'recusandae',
  'itaque',
  'earum',
  'hic',
  'tenetur',
  'a',
  'sapiente',
  'delectus',
  'reiciendis',
  'voluptatibus',
  'maiores',
  'alias',
  'consequatur',
  'perferendis',
  'doloribus',
  'asperiores',
  'repellat',
];

/** Returns a random integer between min (inclusive) and max (exclusive) */
const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * @description
 * A string of random sentences
 *
 * @param {Object} options
 * @param {Number} options.length - The length of the string (in words)
 * @param {Array} options.dictionary - Array of words used to generate the string
 * @param {Boolean} options.capitalized - Capitalize first character of each sentence
 * @param {String} options.separator - Characters used to separate sentences
 * @param {String} options.ending - Characters used as the string ending
 */
export const sentences = (options = {}) => {
  const {
    length = randInt(MAX_LEN * 2, MAX_LEN * 10),
    dictionary = DEFAULT_DICT,
    capitalized = true,
    separator = '. ',
    ending = '.',
  } = options;

  let str = '';

  let remainingWords = length;

  // Add sentences until we have no words left
  while (remainingWords > 0) {
    let sentenceEnding = separator;
    let sentenceWords = randInt(MIN_LEN, MAX_LEN);
    if (sentenceWords >= remainingWords || remainingWords * 2 <= MIN_LEN) {
      // End paragraph
      sentenceWords = remainingWords;
      sentenceEnding = ending;
    }
    // Add sentence
    str += words({
      length: sentenceWords,
      dictionary,
      capitalized,
      ending: sentenceEnding,
    });
    remainingWords -= sentenceWords;
  }

  return str;
};

/**
 * @description
 * A string of random words
 *
 * @param {Object} options
 * @param {Number} options.length The length of the string (in words)
 * @param {Array} options.dictionary Array of words used to generate the string
 * @param {Boolean} options.capitalized Capitalize first character of the string
 * @param {String} options.separator - Characters used to separate words
 * @param {String} options.ending Characters used as the string ending
 *
 */
export const words = (options = {}) => {
  const {
    length = randInt(MIN_LEN, MAX_LEN),
    dictionary = DEFAULT_DICT,
    capitalized = true,
    separator = ' ',
    ending = '.',
  } = options;

  let str = '';
  let randIndex = -1;
  let prevIndex = -1;

  // Add words until we reach length
  for (let i = 0; i < length; i++) {
    // Pick random word from dictionary
    while (prevIndex === randIndex) {
      randIndex = randInt(0, dictionary.length);
    }
    str += dictionary[randIndex];
    if (i !== length - 1) {
      // Word separator
      str += separator;
    }
    // Store current word to avoid repetition in next iteration
    prevIndex = randIndex;
  }

  if (capitalized) {
    // Capitalize first character
    str = str[0].toUpperCase() + str.substring(1);
  }
  if (ending !== '') {
    // String ending
    str += ending;
  }
  return str;
};
