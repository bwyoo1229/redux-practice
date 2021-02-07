import { createStore } from 'redux';

const initialState = {
  counter: 0,
  text: '',
  list: [],
};

// Action type 상수
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// Action creator
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item,
});

// Reducer function (must be pure function)
// 초기 상태를 반환할 수 있도록 state의 초기 값을 파라미터의 default로 넣어주어야 한다.
// default 반환 값은 꼭 state를 반환하도록 하자 (throw new Error 말고!)
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// Create store
const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hellohellohello'));
store.dispatch(addToList({ id: 1, text: 'wowowow' }));

window.store = store;
