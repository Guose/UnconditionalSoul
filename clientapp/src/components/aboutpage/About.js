import React, { Component } from 'react'
import './About.css'

export class About extends Component {
  static displayName = About.name
    constructor(props) {
        super(props)
        this.state = { currentCount: 0}
        this.incrementCounter = this.incrementCounter.bind(this)
        this.decrementCounter = this.decrementCounter.bind(this)
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        })
    }

    decrementCounter() {
        this.setState({
            currentCount: this.state.currentCount - 1
        })
    }

    render() {
        return(
            <div>
                <h1>About</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.decrementCounter}>Decrement</button>

                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            </div>
        )
    }
}