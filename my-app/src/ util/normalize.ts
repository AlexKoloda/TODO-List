import { NormalizedTodos, Todo } from '../types/todo';

export const getNormalizedData = (list: Todo[]): NormalizedTodos => {

  const normalizedObj: NormalizedTodos = {};
  list.forEach((todo) => {
      normalizedObj[todo.id] = todo;
  })

  return normalizedObj;
};

