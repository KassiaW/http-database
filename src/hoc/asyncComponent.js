import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class something extends Component {
        state = {
            component: false
        }

        componentDidMount () {
            importComponent()
                .then(lazy => {
                    this.setState({component: lazy.default});
                });

        }
        render () {
            const L = this.state.component;

            return L ? <L {...this.props} /> : null;
        }
    }
}


export default asyncComponent;