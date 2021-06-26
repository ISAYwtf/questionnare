import {connect, Provider} from "react-redux"
import store from "./redux/redux-store"
import Body from "./components/Body"
import Header from "./components/Header"
import './App.css'
import {getAppCurrentPage} from "./redux/app-reducer/app-selectors"
import FooterContainer from "./components/Footer"

const App = ({currentPage}) =>
    <div className="App">
        <Header/>
        <Body currentPage={currentPage}/>
        {currentPage === "start" ? "" : <FooterContainer/>}
    </div>

const mapStateToProps = state => ({
    currentPage: getAppCurrentPage(state)
})

const AppContainer = connect(mapStateToProps)(App)

const Questionnaire = () =>
    <Provider store={store}>
        <AppContainer/>
    </Provider>

export default Questionnaire
