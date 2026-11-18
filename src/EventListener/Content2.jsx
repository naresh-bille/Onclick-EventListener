import { Component } from "react"

class Content2 extends Component{

  constructor(){
    super();

    this.state={
        greetingmsg:"Hello goood morning ..! Welcome to the Our beautiful world"
    }
    this.greet=this.Greeting.bind(this)  //binding

  }
   Greeting(){
    this.setState({greetingmsg : " Have a nice day bye bye....! "})
   }


    render(){
        return (
            <>

            <h1></h1>
            <h2> here we are using constcructor to perform the actions to change the name.. </h2>
            <h2> if we want to change anuytthing dynamicallly we need to use state management ..ex state nd setstate</h2>

            <h4> to perform dynamic changing there are 3 options..below are they</h4>
             
             <ol>

                <li>Constructor Binding</li>
                <li> Using the arrow function</li>
                <li>Just cALLING THE ARROW function ..no need to create...</li>

             </ol>
             
              <h3>{this.state.greetingmsg}</h3>
              <button onClick={this.greet}>clik meee</button>

{/* <h1> at 45 minutes i stopp watching  videooo </h1> */}

            </>
        )
    }
}

export default Content2;