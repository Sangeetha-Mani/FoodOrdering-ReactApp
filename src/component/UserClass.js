import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count1: 0,
            count2: 1
        
        }

        console.log("child construtor")
        
    }

    componentDidMount() {
        console.log("child did mount will be called")
    }
    
    render(){
        console.log("child render")
        const {name,location,contact} = this.props;
        const {count1, count2} = this.state;
        return (<div clas='user-profile'>
            <h1>User Profile</h1>
            <h1>Count: {count1}</h1>
            <button onClick={

                () => {
                    
                    this.setState({
                        count1: count1 + 1,
                    })
                }
            }>count</button>
            <h3>Name:{name}</h3>
            <h3>Location:{location}</h3>
            <h3>Contact:{contact} </h3>
        </div>)
    }
}

export default UserClass;