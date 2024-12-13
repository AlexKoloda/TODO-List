export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TodosState {
  todos: Todo[];
  filters: string;
  errors: string | null,
}

export interface UserTodo {
  text: string;
  isCompleted: boolean;
}

export type NormalizedTodos = Record<number, Todo>;
