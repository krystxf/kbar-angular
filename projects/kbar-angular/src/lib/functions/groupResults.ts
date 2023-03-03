import { Action, Group } from '../types';

const groupResults = (actions: Action[]): Group[] => {
  const groups = new Set<string | null>(actions.map((x) => x?.group || null));

  let index = 0;

  return [...groups].map((group) => ({
    name: group,
    actions: actions
      .filter((x) => x.group == group)
      .map((x) => ({ ...x, index: index++ })),
  }));
};

export default groupResults;
