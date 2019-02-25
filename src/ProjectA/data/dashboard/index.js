export const ocaChapterTitles = [
  "Java Basic",
  "Working with Java Data Types",
  "Using Operators and Decision Constructs",
  "Creating and Using Arrays",
  "Using Loop Constructs",
  "Working with Methods and Encapsulation",
  "Working with Inheritance",
  "Handling Exceptions",
  "Working with Selected Classes from the Java API"
];

export const ocpChapterTitles = [
  "Java Class Design",
  "Advanced Java Class Design",
  "Generics and Collections",
  "Lambda Built-in Functional Interfaces",
  "Java Stream API",
  "Exceptions and Assertions",
  "Use Java SE 8 Date/Time API",
  "Java I/O Fundamentals",
  "Java File I/O (NIO.2)",
  "Java Concurrency",
  "Building Database Applications with JDBC",
  "Localization"
];

const initialState = {
  selectedCertification: "OCA",
  ocaProgress: ocaChapterTitles.map((ch, i) => ({
    title: ch,
    percentage: 0,
    course_ID: i + 1
  })),
  ocpProgress: ocpChapterTitles.map((ch, i) => ({
    title: ch,
    percentage: 0,
    course_ID: i + 10
  }))
};

const createActionWithName = name => `app/tasks/${name}`;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_PERCENTAGE:
      if (action.id < 10) {
        const updateOcaProgress = state.ocaProgress.map(obj =>
          obj.course_ID === action.id
            ? { ...obj, percentage: action.value }
            : obj
        );
        return { ...state, ocaProgress: updateOcaProgress };
      } else {
        const updateOcpProgress = state.ocpProgress.map(obj =>
          obj.course_ID === action.id
            ? { ...obj, percentage: action.value }
            : obj
        );
        return { ...state, ocpProgress: updateOcpProgress };
      }
    case UPDATE_CERTIFICATION:
      return { ...state, selectedCertification: action.text };
    default:
      return state;
  }
}

export const UPDATE_PERCENTAGE = createActionWithName("UPDATE_PERCENTAGE");
export const UPDATE_CERTIFICATION = createActionWithName(
  "UPDATE_CERTIFICATION"
);

export const updatePercentage = (id, value) => {
  return {
    type: UPDATE_PERCENTAGE,
    id,
    value
  };
};

export const updateCertification = text => {
  return {
    type: UPDATE_CERTIFICATION,
    text
  };
};
