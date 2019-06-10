import React from 'react';

class TimeLabel extends React.Component {
    render() {
        return (
            <span>
                {this.props.date}
            </span>
        );
    }
}

export default TimeLabel;