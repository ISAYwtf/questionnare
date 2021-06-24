import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import Body from "./components/Body"
import Header from "./components/Header"
import './App.css'
import {
    getAppCurrentQuestion,
    getAppIsFetching,
    getAppLevels,
    getAppQuestions, getAppQuestionSize,
    getAppScore, getAppTargetPage
} from "./redux/app-reducer/app-selectors";
import {setTargetPage, toggleIsFetching} from "./redux/app-reducer/app-reducer";
import Preloader from "./components/common/Preloader";
import Footer from "./components/Footer"

const App = props =>
    <div className="App">
        {props.isFetching ? <Preloader /> : ""}
        <Header/>
        <Body {...props}/>
        {props.targetPage === "start" ? "" : <Footer {...props} />}
    </div>

const mapStateToProps = state => ({
    isFetching: getAppIsFetching(state),
    score: getAppScore(state),
    levels: getAppLevels(state),
    currentQuestion: getAppCurrentQuestion(state),
    questions: getAppQuestions(state),
    questionSize: getAppQuestionSize(state),
    targetPage: getAppTargetPage(state)
})

const mapDispatchToProps = {toggleIsFetching, setTargetPage}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

const Questionnaire = props =>
    <Provider store={store}>
        <AppContainer />
    </Provider>

export default Questionnaire
