import * as React from 'react';
import Clock from './Clock';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
    render() {
        return (<div>
            <h3>React template.</h3>
            <img src="assets/apple.png" />
            <button className="styledButton">Styled Button!</button>
            <Clock />
            456
        </div>);
    }
}

export default hot(App);