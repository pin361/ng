import { findTop100 } from './findTop100.js';
import { test } from '../../utils/testing/test.js';

const longText = "The diagram (fig. 1) above shows how data is being passed around the app in using MVC architecture, but taking a deeper look into what it will look like in a very large application with several models and view components. We will notice that it becomes too complicated";
const text = [];
[0, 1, 2, 3, 4, 5].forEach((index) => {
  text
    .push(...longText.split(' ')
    .map((item) => `${item}_${index}`)
  );
});

test.equal(
  'findTop100',
  findTop100(text.join(' ')).length,
  100
);
