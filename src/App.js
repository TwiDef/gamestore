import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import GamePage from "./pages/game-page/GamePage";
import Header from "./components/Header/Header";
import { Provider } from 'react-redux'
import { store } from "./redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/app/:title">
                            <GamePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
