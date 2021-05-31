export const Types = {
  add: "ADD",
  remove: "REMOVE",
  reset: "RESET",
};

export const INITIAL_STATE = {
  value: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.add:
      return {
        ...state,
        value: state.value + 1,
      };
    case Types.remove:
      return {
        ...state,
        value: state.value > 0 ? state.value - 1 : 0,
      };
    case Types.reset:
      return {
        ...state,
        value: 0,
      };
    default:
      throw new Error("undefined method");
  }
};

export const Creators = {
  add: () => ({ type: Types.add }),
  remove: () => ({ type: Types.remove }),
  reset: () => ({ type: Types.reset }),
};
