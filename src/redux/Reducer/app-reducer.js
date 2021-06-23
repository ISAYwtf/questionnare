const SET_SCORE = "SET-SCORE"
const SET_CURRENT_QUESTION = "SET-CURRENT-QUESTION"
const SET_QUESTIONS = "SET-QUESTIONS"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

const initialState = {
    levels: {easy: 0.5, middle: 1, hard: 2},
    questionSize: 10,
    score: 0,
    currentQuestion: 0,
    questions: [
        {
            question: null,
            answers: [],
            correctAnswer: null,
            level: null
        }
    ],
    isFetching: false,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCORE:
            return {
                ...state,
                score: state.score + action.point
            }
        // case SET_CURRENT_QUESTION:

    }
}

export const setScore = point => ({type: SET_SCORE, point})
export const setCurrenQuestion = currentQuestion => ({type: SET_CURRENT_QUESTION, currentQuestion})
export const setQuestions = questions => ({type: SET_QUESTIONS, questions})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})

export default reducer
