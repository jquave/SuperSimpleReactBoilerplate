import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export default history;
import styles from "./styles/styles.scss";

const MOUNT_NODE = document.getElementById('app');
window.t = MOUNT_NODE;
window.y = "Y";
const render = () => {
    ReactDOM.render(
        <App />,
        MOUNT_NODE
    );
}

render();