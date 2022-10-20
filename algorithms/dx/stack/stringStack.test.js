import { test } from '../../utils/testing/test.js';
import { stringStack } from "./stringStack.js";

test('String stack', stringStack('#Abc#dab#f#egh#'), 'Abdaeg');
