import { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundry extends Component {
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        if (this.state.error) return <ErrorIndicator />;

        return (
            this.props.children
        )
    }
}