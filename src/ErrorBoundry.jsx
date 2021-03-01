import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error + "o93ed ghady ");
    }

    render() {
        if (this.state.hasErrored)
            return (
                <div className="Error">
                    <img src="https://i.imgur.com/QIxIKBH.png" width="350px" alt="ghost" />
                    <p>
                        famma haja ghriba ...
                    </p>
                </div>
            )
        return this.props.children
    }
}
