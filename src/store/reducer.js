const initialAuthState = {
  shortlisted: [],
  rejected: [],
};

const constants = {
  ADD_SHORTLISTED: "ADD_SHORTLISTED",
  ADD_REJECTED: "ADD_REJECTED",
};

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case constants.ADD_SHORTLISTED: {
      const { user } = action.payload;
      state.shortlisted.push(user);
      return { ...state };
    }
    case constants.ADD_REJECTED: {
      const { user } = action.payload;
      state.rejected.push(user);
      return { ...state };
    }
    default:
      return state;
  }
};

export const actions = {
  addShotlisted: (user) => ({
    type: constants.ADD_SHORTLISTED,
    payload: { user },
  }),
  addRejected: (user) => ({
    type: constants.ADD_REJECTED,
    payload: { user },
  }),
};
