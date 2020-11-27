import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js';
  
  export function getInitialData() {
    console.log("API get initial data")
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => ({
        users,
        questions
      })
    );
  }
  
  export function saveQuestion(question) {
    console.log('saveQuestion')
    console.log('info')
    return _saveQuestion(question);
  }
  
  export function saveQuestionAnswer(authedUser, qid, answer) {
    //console.log('info', { authedUser, qid, answer });
    return _saveQuestionAnswer({ authedUser, qid, answer });
  }