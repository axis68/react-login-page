import { Component } from 'react';

class MyComponent extends Component {

    render() {
        console.log(this.props);

        const { monsters} = this.props;



        return(<div>HELLO COMPONENT {monsters} </div>);
    }

}

export default MyComponent;