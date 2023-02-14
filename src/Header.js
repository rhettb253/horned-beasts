import React from 'react';

class Header extends React.Component {
    // component Props: Values that are passed from parent to child component;
    constructor(props) {
      super(props);
      this.title = props.title;
    }
  
    // built in method on React Components
    render() {
      return (
        <div>
            <h1>This is my first react project</h1>
            <h2>{this.title}</h2>
        </div>
      )
    }
  }

  export default Header;