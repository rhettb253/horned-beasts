import React from 'react';

class Footer extends React.Component {
    // component Props: Values that are passed from parent to child component;
    constructor(props) {
      super(props);
      this.author = props.author;
    }
  
    // built in method on React Components
    render() {
      return (
       <div></div>
      )
    }
  }

  export default Footer;