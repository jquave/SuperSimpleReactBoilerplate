import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export default history;
import Styles from "./styles/styles";
new Styles();
// Imports styles globally, don't let VSCode convince you that this isnt used :|

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
}

render();