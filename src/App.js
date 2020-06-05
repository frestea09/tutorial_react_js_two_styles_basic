import React from 'react'
import './Component/css/belajar_styles.css'
import Content from './Component/Content'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      threshold : true,
    }
  }
  render(){
    return(
      <div className='App'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>Ilman ganteng</h1>
          </div>
        </div>
        <h3>Hello World</h3>
        <p>ini paragraph</p>
        <button className='btn btn-success'>Ini tombol</button>
        <ul>
          <li id='pertama'>Pertama</li>
          <li id='kedua'>Kedua</li>
          <li id='ketiga'>Ketiga</li>
        </ul>
        <Content kebenaran = {this.state.threshold}/>
      </div>
    )
  }
}
export default App