import { Component } from "react";
import Content2 from './Content2'

import Content3 from './Content3'
import Content1 from './Content1'

class Content extends Component{

  Name="Naresh"
   Handlemsg() {
    this.Name="rameshhhhhhhh"
    console.log(this.Name)
  }
     
    render(){
        return(
    <>
<h1>Good morning {this.Name}</h1>
<h3>Onclick means whenever we click on he buttton acions is performewd.at that time it is used in js nd react js</h3>


<button onClick={this.Handlemsg()}  >Click here</button>

<h4>By just clicking the click here button content dontchange .for thisss we need to use constructor...</h4>
   <Content2/>
   <Content3/>

   <Content1/>

    </>

        )
    }

}

export default Content