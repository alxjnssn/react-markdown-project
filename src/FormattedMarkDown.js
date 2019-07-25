import React, {Component} from 'react';

class FormattedMarkDown extends Component {
    render() {
        return (
            <div className="formatted-mark-down" dangerouslySetInnerHTML={{__html:this.props.formattedMarkDown}}>

            </div>
        ) 
    }
}

export default FormattedMarkDown;