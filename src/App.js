import React,{Component} from 'react'
import './App.css'

class App extends Component{
  data =[
    "This is list Sample",
    "これはリストのサンプルです",
    "配列をリストに変換します"
  ]
  constructor(props){
    super(props)
    this.state ={
      list: this.data
    }
  }
  render(){
    return(
      <>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">Show List.</p>
          <List title="サンプル・リスト" data={this.data}/>
        </div>
      </>
    )
  }
}

class List extends Component{
  number = 1
  render(){
    let data=this.props.data;
    return(
      <>
        <p className="h5 text-center">{this.props.title}</p>
        <ul className="list-group">
          {
            data.map
            (
              (item,key)=>
              <li className="list-group-item" key={key}>
                <Item number={key+1} value={item} />
              </li>
            )
          }
        </ul>
      </>
    )
  }
}

class Item extends Component{
  itm={
    fontSize:"16pt",
    color:"#00f",
    textDecoration:'underline',
    textDecorationColor:'#ddf'
  }
  num={
    fontWeight:"bold",
    color:"red"
  }

  render(){
    return(
      <p style={this.itm}>
        <span style={this.num}>
          [{this.props.number}]&nbsp;
        </span>
        {this.props.value}
      </p>
    )
  }
}

export default App;
