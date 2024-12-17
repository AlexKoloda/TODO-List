export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export type TodosNormalize = Record<number, Todo>;

export interface TodosState {
  todos: Todo[];
  ids: number[];
  todosNormalize: TodosNormalize;
  filters: string;
  errors: string | null;
}

export interface UserTodo {
  text: string;
  isCompleted: boolean;
}

export type NormalizedTodos = Record<number, Todo>;
