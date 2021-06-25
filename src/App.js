import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import Body from "./components/Body"
import Header from "./components/Header"
import './App.css'
import {
    getAppCurrentPage,
    getAppCurrentQuestion,
    getAppIsFetching,
    getAppLevels,
    getAppQuestions, getAppQuestionSize,
    getAppScore
} from "./redux/app-reducer/app-selectors";
import {
    clearResult, fixAnswer,
    getQuestions, setCurrentAnswer,
    setCurrentPage,
    setCurrentQuestion,
    toggleIsFetching
} from "./redux/app-reducer/app-reducer";
// import Preloader from "./components/common/Preloader";
import Footer from "./components/Footer"

const App = props => {

    return <div className="App">
        <Header/>
        <Body {...props}/>
        {props.currentPage === "start" ? "" : <Footer {...props} />}
    </div>;
}

const mapStateToProps = state => ({
    isFetching: getAppIsFetching(state),
    score: getAppScore(state),
    levels: getAppLevels(state),
    currentQuestion: getAppCurrentQuestion(state),
    questions: getAppQuestions(state),
    questionSize: getAppQuestionSize(state),
    currentPage: getAppCurrentPage(state)
})

const mapDispatchToProps = {
    toggleIsFetching,
    setCurrentPage,
    getQuestions,
    setCurrentQuestion,
    setCurrentAnswer,
    fixAnswer,
    clearResult
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

const Questionnaire = props =>
    <Provider store={store}>
        <AppContainer/>
    </Provider>

export default Questionnaire
