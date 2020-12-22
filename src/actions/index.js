export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});
export const onInputNumber = () => ({
  type:'INPUT_NUMBER'
});

export const onInputNumberChange = (number) =>({
  type: 'INPUT_NUMBER_CHANGE',
  number
});


// the webApp is almost fuctioning as intended. I need the increment/decrement click amount to be set to zero when i pass through a number in the input.