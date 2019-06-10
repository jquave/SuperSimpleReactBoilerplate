import React from 'react';
import TimeLabel from './TimeLabel';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {date: Date()};
    }
    componentDidMount() {
        this.timer();
    }
    timer() {
        setTimeout(() => {
            this.timer();
            this.setState({...this.state,
                date: Date()
            });
        }, 999);
    }
    render() {
        return (
            <div>
                <TimeLabel date={this.state.date} />
            </div>
        );
    }
}

export default Clock;