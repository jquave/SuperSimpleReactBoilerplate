import * as React from 'react';

interface Props {
    date: Date
}

class TimeLabel extends React.Component<Props> {
    props: Props
    render() {
        return (
            <span>
                {this.props.date}
            </span>
        );
    }
}

export default TimeLabel;