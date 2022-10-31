# @sb-luis/tinta

> Tiny utility library for generating placeholder text

```javascript
import { words, sentences } from '@sb-luis/tinta';

// a random sentence
// between 5 and 19  words
const randomSentence = words();

// a random paragraph
// between 40 and 199 words
const randomParagraph = sentences();
```

Customize the text output to your needs with an `options` object

```javascript
const customSentence = words({
  length: 11, // in words - default random int 5-19
  dictionary: ['foo', 'bar'], // default 99 lorem ipsum words
  capitalized: false, // first char of sentence - default 'true'
  separator: ',', // words ending - default ' '
  ending: '', // sentence ending - default '.'
});

const customParagraph = sentences({
  length: 111, // in words- default random int 40-199
  dictionary: ['x', 'y', 'z'], // default 99 lorem ipsum words
  capitalized: false, // first char of sentence - default 'true'
  separator: ' ', // sentence ending - default '. '
  ending: '!', // paragraph ending - default '.'
});
```
