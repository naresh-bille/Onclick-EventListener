import { Component } from "react"



class Content3 extends Component{


     constructor(){
        super();
        this.state ={
            msg : "hello good morning...is everything okay with ur jobbb...!"      
        }

        this.wish = this.greeting.bind(this)
        
     }

     greeting(){
        this.setState({msg :" good morning my dear..yes everything is fine ..im good at  my job"})
     }


    render(){
return (

    <>
     <h3> im practising the Constructor binding method..it used to change the content dynamically</h3>

     <h2> {this.state.msg}</h2>

     <button onClick={this.wish}>Click meee</button>
    
    </>
)

    }
}

export default Content3;