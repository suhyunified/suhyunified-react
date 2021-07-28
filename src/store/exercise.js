import { createStore } from 'redux'

// state
const initialState = {
  counter: 0,
  text: '',
  list: []
};

// type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action creator
const increase = () => {
  return {
    type: INCREASE,
  }
}

const decrease = () => {
  return {
    type: DECREASE
  }
}

const addToList = item => {
  return {
    type: ADD_TO_LIST,
    item
  }
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE:
      return { 
        ...state, 
        counter: state.counter + 1
      }
    
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }

    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }

    default :
      return state
  }
}

// store 생성
const store = createStore(reducer)

const listener = () => {
  console.log(store.getState())
}

const unsubscribe = store.subscribe(listener)

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(addToList({ id: 1, text: 'hi' }))