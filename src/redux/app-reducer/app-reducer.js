import API from "../../api/api";
import {encodeString} from "../../utils/encoder";

const SET_CURRENT_QUESTION = "SET-CURRENT-QUESTION"
const SET_QUESTIONS = "SET-QUESTIONS"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const SET_TARGET_PAGE = "SET-TARGET-PAGE"
const SET_ERROR = "SET-ERROR"
const SET_CURRENT_ANSWER = "SET-CURRENT-ANSWER"
const FIX_ANSWER = "FIX-ANSWER"
const CLEAR_RESULT = "CLEAR-RESULT"

const initialState = {
    levels: {easy: 1, medium: 2, hard: 3},
    questionSize: 10,
    score: {
        easy: 0,
        medium: 0,
        hard: 0,
        main: 0
    },
    currentQuestion: 0,
    currentAnswer: null,
    questions: [
        {
            category: null,
            correctAnswer: null,
            level: null,
            incorrectAnswers: [],
            question: null,
            type: null,
            answers: [],
        }
    ],
    currentPage: "start",
    isFetching: false,
    errorData: null

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIX_ANSWER:
            const currentQuestion = state.questions[state.currentQuestion]
            const correctAnswer = encodeString(currentQuestion.correctAnswer)
            const level = encodeString(currentQuestion.level)
            let score = {...state.score}
            let answer = state.currentAnswer

            console.log("correct answer", correctAnswer)

            if (answer === null) {
                answer = encodeString(currentQuestion.answers[currentQuestion.answers.length - 1])
            }

            if (correctAnswer === answer) {
                score[level]++
            }
            // debugger

            return {
                ...state,
                score,
            }
        case SET_CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: action.currentQuestion
            }
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.questions
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_TARGET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_CURRENT_ANSWER:
            return {
                ...state,
                currentAnswer: action.answer
            }
        case SET_ERROR:
            return {
                ...state,
                errorData: action.error
            }
        case CLEAR_RESULT:
            return initialState
        default:
            return state
    }
}

export const setCurrentQuestion = currentQuestion => ({type: SET_CURRENT_QUESTION, currentQuestion})
export const setQuestions = questions => ({type: SET_QUESTIONS, questions})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setCurrentPage = currentPage => ({type: SET_TARGET_PAGE, currentPage})
export const setError = error => ({type: SET_ERROR, error})
export const setCurrentAnswer = answer => ({type: SET_CURRENT_ANSWER, answer})
export const fixAnswer = () => ({type: FIX_ANSWER})
export const clearResult = () => ({type: CLEAR_RESULT})

export const getQuestions = size => async dispatch => {
    dispatch(toggleIsFetching(true))

    // console.log("API: Starting")

    const data = await API.getQuestions(size)

    if (data.response_code !== 0) {
        dispatch(setError("Ошибка получения данных. Повторите попытку."))
        // console.log("API: Error", data)
        return
    }

    const questions = data.results.map(el => {
        return {
            category: el.category,
            correctAnswer: el.correct_answer,
            level: el.difficulty,
            incorrectAnswers: el.incorrect_answers,
            question: el.question,
            type: el.type,
            answers: [...el.incorrect_answers, el.correct_answer]
        }
    })


    dispatch(setQuestions(questions))

    dispatch(toggleIsFetching(false))

    // console.log("API: questions", questions)
}

export default appReducer
