const allproducts = [];
export const productReducer = (state = allproducts, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      state = [...state, action.payload];
      break;
    case "FETCH_PRODUCT":
      state = [...action.payload];
      break;
    case "REMOVE_PRODUCT":
      const result = state.filter(obj => obj.id != action.payload);
      state = [...result];
      break;
    default:
      break;
  }
  return state;
}

export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
      case "ADD_FOVORITE":
      console.log('add fav', action.payload);
      if(state.includes(action.payload)) {
        state = state.filter(item => item !== action.payload)
      } else {
        state = [...state, action.payload];
      }
      break;
    default:
      break;
  }
  return state;
}

export const cartReducer = (state = [], action) => {
  switch (action.type) {
      case "ADD_CART":
      console.log('add cart', action.payload);
      if(state.includes(action.payload)) {
        state = state.filter(item => item !== action.payload)
      } else {
        state = [...state, action.payload];
      }
      break;
    default:
      break;
  }
  return state;
}

export const mathReducer = (state = { result: 1, lastValues: [] }, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUB":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
}

export const userReducer = (state = { name: 'Sathish', age: 27 }, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
}
