const initialState = {
  quizs: [],
  answerStatus: {}, //{ 0: { isAnswered:false,isMarked:false,scored:false,id:0}}
  index: 0,
  total: 0,
  score: 0,
  percentage: 0,
  quizsTitle: "",
  course_id: 0
};

const initialAnswerState = {
  isAnswered: false,
  isMarked: false,
  scored: false,
  answer: null,
  isMultipleAnswered: false
};
//array.reduce((obj,elem)=> { return {...obj,[elem.id]:{isAnswered:false,isMarked:false,score:false}}},{})
const createActionWithName = name => `app/tasks/${name}`;

const calculatePercentage = obj => {
  let totoalAnswered = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key].isAnswered) {
      totoalAnswered += 1;
    }
  }
  return totoalAnswered;
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_QUIZS:
      const initState =
        action.answerState ||
        action.quizs.reduce((obj, quiz) => {
          return { ...obj, [quiz.id]: initialAnswerState };
        }, {});

      const percentage =
        (calculatePercentage(initState) / action.quizs.length) * 100;

      return {
        ...state,
        quizs: action.quizs,
        total: action.quizs.length,
        answerStatus: initState,
        percentage
      };

    case NEXT_QUIZ:
      if (state.index >= state.total) {
        return state;
      }
      return {
        ...state,
        index: state.index + 1
      };

    case BACK_QUIZ:
      if (state.index === 0) {
        return state;
      }
      return { ...state, index: state.index - 1 };

    case MARK_QUIZ:
      const updatedanswerStatus = {
        ...state.answerStatus[action.id],
        isMarked: !state.answerStatus[action.id].isMarked
      };
      return {
        ...state,
        answerStatus: {
          ...state.answerStatus,
          [action.id]: updatedanswerStatus
        }
      };

    case ANSWER_QUIZ:
      const updatedanswerStatusByAnswered = {
        ...state.answerStatus[action.id],
        isAnswered: true,
        scored: action.validate,
        answer: action.index
      };

      const totoalAnswered = calculatePercentage(state.answerStatus);

      return {
        ...state,
        percentage: ((totoalAnswered + 1) / state.total) * 100,
        answerStatus: {
          ...state.answerStatus,
          [action.id]: updatedanswerStatusByAnswered
        }
      };

    case JUMP_TO_QUIZ:
      return { ...state, index: action.id };

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
}

export const GET_QUIZS = createActionWithName("GET_QUIZS");
export const NEXT_QUIZ = createActionWithName("NEXT_QUIZ");
export const BACK_QUIZ = createActionWithName("BACK_QUIZ");
export const ANSWER_QUIZ = createActionWithName("ANSWER_QUIZ");
export const MARK_QUIZ = createActionWithName("MARK_QUIZ");
export const JUMP_TO_QUIZ = createActionWithName("JUMP_TO_QUIZ");
export const RESET_STATE = createActionWithName("RESET_STATE");

export const getQuizs = (quizs, answerState) => {
  return {
    type: GET_QUIZS,
    quizs,
    answerState
  };
};

export const nextQuiz = () => {
  return {
    type: NEXT_QUIZ
  };
};

export const backQuiz = () => {
  return {
    type: BACK_QUIZ
  };
};

export const markQuiz = id => {
  return {
    type: MARK_QUIZ,
    id
  };
};

export const answerQuiz = (id, validate, index) => {
  return {
    type: ANSWER_QUIZ,
    id,
    validate,
    index
  };
};

export const jumpToQuiz = id => {
  return {
    type: JUMP_TO_QUIZ,
    id
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE
  };
};
