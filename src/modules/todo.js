const ADD_TODO = 'todo/ADD_TODO'
const DELETE_TODO = 'todo/DELETE_TODO'
const TOGGLE_TODO = 'todo/TOGGLE_TODO'

// action creator
let nextId = 3;
export const addTodo = text => {
  return {
    type: ADD_TODO,
    todo: {
      id: nextId++,
      text,
      done: false
    }
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

const initialState = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: false
  },
]

// reducer
export default function todo(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO :
      return state.concat(action.todo)
    
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo )

    default:
      return state
  }
}


