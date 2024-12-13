export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export type todosNormalize = Record<number, Todo>;

export interface TodosState {
  todos: Todo[];
  ids: number[];
  todosNormalize: todosNormalize;
  filters: string;
  errors: string | null;
}

export interface UserTodo {
  text: string;
  isCompleted: boolean;
}

export type NormalizedTodos = Record<number, Todo>;
