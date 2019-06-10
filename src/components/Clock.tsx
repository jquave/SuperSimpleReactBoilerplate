import * as React from 'react';
import TimeLabel from './TimeLabel';

class Clock extends React.Component<any, any> {
    state: any
    constructor(props: any) {
        super(props);
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
        }, 500);
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