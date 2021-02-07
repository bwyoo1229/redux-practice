const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;
export const addTodo = text => {
  const currentId = nextId;
  nextId += 1;

  return {
    type: ADD_TODO,
    todo: {
      id: currentId,
    },
  };
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

const initialState = [];
/* 
[
  {
    id: 1,
    text: 'example',
    done: false,
  }
]å
*/

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
