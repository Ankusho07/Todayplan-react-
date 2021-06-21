import logo from './logo.svg';
import './App.css'; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'   

import React, { Component } from 'react'
import Plan from './Plan'

class App extends Component {

  state={
    items:[],
    text:""
  }

  handle = (e)=>{

   this.setState(
     {
       text:e.target.value
     }
   )

  }

  delete=(id)=>{
    console.log('deleted'+id)
   var olditems = [...this.state.items];
   
   const items = olditems.filter(
    (element,i)=>{
      return i!==id;
    }
  )

  this.setState(
    {items:items}
  )
   
   
    
   
   }
   
   
    
   
   

  Add = ()=>{

    if(this.state.text !== ''){
      const items = [...this.state.items,this.state.text] 
      this.setState(
        {
          items:items,text:''
        }
      )
      console.log(items)
    }


  }

 






  render() {
    return (
      <div className="container-fluid my-5">

        <div className="row">

          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">

            <h1 className="text-center text-bold "> Today's plan</h1>
            <div className="row">
       <div className="col-9">

    <input type="text"  className="form-control text-white" onChange={this.handle} value = {this.state.text} placeholder="write your today's plan" name="" id="" />
    


       </div>
       <div className="col-2">
      <button className="btn btn-warning px-5 " onClick={this.Add} style={{fontStyle:'italic', fontFamily:'cursive'}}>Add</button>
    </div>

    <div className="container-fluid">
   <ul className="list-unstyled row m-5">

     {
     this.state.items.map((value,i)=>{
      return <Plan  key={i} id = {i} senddata={this.delete} value = {value} />
     })

     }
 
     
   </ul>


    </div>

            </div>

          </div>



        </div>

      </div>
    )
  }
}




export default App;
