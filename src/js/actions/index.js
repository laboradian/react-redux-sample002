export const addition = (value) => {
  return {
    type: 'ADD_ONE_VALUE',
    value
  }
}

export const clearAddition = () => {
  return {
    type: 'CLEAR_VALUE'
  }
}

export const additionOk = () => {
  return {
    type: 'ADD_STATUS_OK'
  }
}

export const additionNg = () => {
  return {
    type: 'ADD_STATUS_NG'
  }
}

export const multiplication = (value) => {
  return {
    type: 'MULTIPLICATION_ONE_VALUE',
    value
  }
}

export const multiplicationClearAddition = () => {
  return {
    type: 'MULTIPLICATION_CLEAR_VALUE'
  }
}

export const multiplicationOk = () => {
  return {
    type: 'MULTIPLICATION_STATUS_OK'
  }
}

export const multiplicationNg = () => {
  return {
    type: 'MULTIPLICATION_STATUS_NG'
  }
}

