const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_LOGIN_INFO':
      return {...state, ...action.payload}
  }
  return state;
}

export default userReducer