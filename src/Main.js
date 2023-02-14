import React from 'react';

class Main extends React.Component {
    // component Props: Values that are passed from parent to child component;
    constructor(props) {
      super(props);
      this.id = props.id;
    }
  
    // built in method on React Components
    render() {
      return (
       <div>Hi There</div>
      )
    }
  }

  export default Main;