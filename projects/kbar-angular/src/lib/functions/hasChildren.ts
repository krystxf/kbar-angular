import { Action } from '../types';

const hasChildren = (parent: string, actions: Action[]): boolean => {
  return actions.some((action) => action.parent === parent);
};

export default hasChildren;
