export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_IMCOMPLETED: "SHOW_IMCOMPLETED",
  SHOW_MARKED: "SHOW_MARKED",
  SHOW_WRONG: "SHOW_WRONG"
};

const initialState = VisibilityFilters.SHOW_ALL;

const createActionWithName = name => `app/tasks/${name}`;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export const SET_VISIBILITY_FILTER = createActionWithName(
  "SET_VISIBILITY_FILTER"
);

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
