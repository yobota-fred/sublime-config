import hello from './second';
import { named } from './second';

const x = 'something';

x.concat('another');
// TODO: check they show up
hello();
// TODO JIRA-123: does this also show up?
named(1, 3);

/**
 * @param {number[]} things - a bunch of things
 */
const doStuff = (things) => {
  for (const thing of things) {
    thing * 3;
  }
};
doStuff([1, 2, 3]);
doStuff([4, 5]);
