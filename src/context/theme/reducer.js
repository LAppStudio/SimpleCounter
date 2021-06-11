const Types = {
  set: "SET_THEME",
  reset: "RESET_THEME",
  open: "THEMES_OPEN",
  close: "THEMES_CLOSE",
};

export const INITIAL_STATE = {
  theme: "light",
  modalOpen: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.set:
      return {
        ...state,
        theme: action.theme,
      };
    case Types.reset:
      return INITIAL_STATE;
    case Types.open:
      return { ...state, modalOpen: true };
    case Types.close:
      return { ...state, modalOpen: false };
    default:
      throw new Error("undefined method");
  }
};

export const Creators = {
  set: (theme) => ({ type: Types.set, theme }),
  reset: () => ({ type: Types.reset }),
  open: () => ({ type: Types.open }),
  close: () => ({ type: Types.close }),
};
