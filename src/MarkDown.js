import React, {Component} from 'react';
import marked from 'marked';

class MarkDown extends Component {
    state = {
        textAreaValue: '',
    }

    handleChange = e => {
        this.setState({
            textAreaValue: e.target.value
        }, () => {this.props.setFormattedMarkDown(marked(this.state.textAreaValue))});  
    }

    render() {
        return (
            <form className="mark-down">
                <label htmlFor="mark-down-text-area">MarkDown</label>
                <textarea id="mark-down-text-area" onChange={this.handleChange} placeholder="Type MarkDown here!"/>
            </form>
        )
    }
}

export default MarkDown;