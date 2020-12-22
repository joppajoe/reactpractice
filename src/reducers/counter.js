const initialState = {
  count: 0,
  clickCount: 0,
  numberInputted: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log(state.clickCount)
      return {
        ...state,
        count: state.count + 1,
        clickCount: state.clickCount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clickCount: state.clickCount + 1
      
      };
    case 'CLICKCOUNT':
      return {
        ...state,
        count: state.count = 0
      };
    case 'INPUT_NUMBER_CHANGE':
      return{
        ...state,
        numberInputted: action.number,
        clickCount: 0

        

      };
      case 'INPUT_NUMBER':
      return{
        ...state,
        count: parseInt(state.numberInputted),
        numberInputted: null
      };
    default:
      return state;
  }
}

export default counterReducer;