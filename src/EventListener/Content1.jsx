import { Component } from "react";
class Content1 extends Component{

    constructor(){
        super();
        this.state={
             greeting: "good vening Bhaskar how the construction is going.."  
        }
        this.msg=this.Greeting1.bind(this)
 }
    Greeting1(){
        this.setState({greeting:" yeah everything is fine. the work is ongoing "} )
    }
    render(){
    return (

    <>

    <h1>{this.state.greeting}</h1>
    <button onClick={this.msg}> click</button>    {/* binding variable */}
   
    <h2 style={{color:"red"}}> im calling another componenttt</h2> 
    <Content4/>
    </>
)}}
export default  Content1




export class Content4 extends Component {
  constructor() {
    super();
    this.state = {
      Movie: "We are going to Movieee on next friday..u can also joinnnn",
      textColor: "black",       // Initial text color
      bgColor: "transparent"    // Initial background color
    };
    this.update = this.SetName.bind(this);
  }

  SetName() {
    this.setState({
      Movie: "we are like to plan a ENE2 on the same night second show...",
      textColor: "red",       // New text color on click
      bgColor: "#282c34"  ,      // New background color on click
            textAlign:"center"
            

    });
  }

  render() {
    // Define the style object using state values
    const textStyle = {
      color: this.state.textColor,
      backgroundColor: this.state.bgColor,
      padding: "10px",
      borderRadius: "5px"
    };

    return (
      <>
        <h2>Im practising the constructor binding in classs componentss</h2>
        {/* Apply the dynamic style to the heading */}
        <h2 style={textStyle}>{this.state.Movie}</h2>
        <button onClick={this.update}>check</button>
      </>
    );
  }
}
