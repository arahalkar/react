import React, {Component} from 'react'
import './PracticeCounter.css'

class PracticeComponent extends Component{

    constructor(){
        super()

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
    }

    render(){
        return(
            <div>
                <button className="practiceCounter" onClick={this.increment}>+{this.props.by}</button>
                <span className="practiceCounterResults">{this.state.counter}</span>
            </div>
        )
    }

    increment(){
        //console.log("+2 button clicked")
        this.setState(
            {
            counter : this.state.counter + this.props.by
        }
        )
    }
}

export default PracticeComponent