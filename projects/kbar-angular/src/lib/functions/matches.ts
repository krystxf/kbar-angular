import { Action } from '../types/actions';
import Fuse from 'fuse.js';

const getMatches = (query: string, actions: Action[]): Action[] => {
  // If the query is empty, return all actions
  if (query === '' || [...query].every((x) => x === ' ')) {
    return actions;
  }

  const fuse = new Fuse(actions, {
    keys: [
      {
        name: 'name',
        weight: 0.7,
      },
      {
        name: 'keywords',
        weight: 0.3,
      },
    ],
    isCaseSensitive: false,
    includeScore: true,
    sortFn: (a, b) => {
      if (a.score === b.score) {
        return 0;
      }
      return a.score < b.score ? -1 : 1;
    },
  });

  const results = fuse.search(query);

  return results.map((res) => res.item);
};

export default getMatches;
