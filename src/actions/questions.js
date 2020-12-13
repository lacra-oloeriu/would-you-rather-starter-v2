import { saveQuestion,saveQuestionAnswer } from "../utils/api";


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION ='ANSWER_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function answerQuestion({authedUser,qid,answer}) {
  return{
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
    });
  };
}


export function handleAnswerQuestion(info) {
  return(dispatch) => {
    dispatch(answerQuestion(info))
    return saveQuestionAnswer(info)
    .catch((e) =>{
      console.warn( 'Error in handleAnswerQuestion', e)
    })
  }
}