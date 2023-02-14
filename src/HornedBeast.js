import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.description = props.description;
        this.imageUrl = props.imageUrl;
    }

    render() {
        return (
            <div>
                <h2>This is a {this.props.title}</h2>
                <img src={this.props.imageUrl} alt="Animal with horns" title={this.props.title}/>
                <p>{this.props.description}</p>
                <p>Hi</p>
            </div>
        )
    }
}

export default HornedBeast;