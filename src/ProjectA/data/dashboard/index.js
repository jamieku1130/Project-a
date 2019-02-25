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

// const selectedAction = ["REVIEW", "EXAM"];

const initialAnswerState = {
  selectedTitle: "",
  ocaProgress: ocaChapterTitles.map((ch, i) => ({
    title: ch,
    percentage: 0,
    id: i
  })),
  ocpProgress: ocpChapterTitles.map((ch, i) => ({
    title: ch,
    percentage: 0,
    id: i
  }))
};

const createActionWithName = name => `app/tasks/${name}`;
