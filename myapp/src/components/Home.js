import { Component } from "react";




class ChildHome extends Component{
    constructor(props){
        super(props);

        this.state={
            nameone:"Hello",
            count:0,
        }
    }
 

    async componentDidMount(){
        const data = await fetch("");
        const json= await data.json()
        console.log(json)
        this.setState(json)
    }
  
    componentDidUpdate(){
        console.log("componentDidUpdate")

    }

    componentWillUnmount(){
        console.log("componentWillUnmount")

    }

    
    render(){
        const {nameone , count} = this.state
        const {name} = this.props

        return(
            <>
            <h1>ChildHome - {name} - {nameone}</h1>
            <h1>{count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count +1})}}>CountIncrement</button>
            </>
        )
    }
}






class Home extends Component{
    render(){
        return(
            <>
                <h1>ParentHome</h1>
                <ChildHome name="Home passed as props"/>
            </>
        )
    }
}

export default Home



// learn Class Component 
// creating a class component
// how to pass props 
// how to create a state variables
// how to update a state variables
// life cycle of react 
    // componentDidMount => making api calls 
    // componentDidUpdate
    // componentWillMount


