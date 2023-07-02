import { Component } from "react";
import {Link} from 'react-router-dom' ;
import './index.css';

class Home extends Component {
  state = {check:false,agree:false}

  onCheck = (event) => {
    this.setState({check:event.target.checked})
  }

  agreeButton = () => {
    this.setState({agree:true})
  }

  nextButton = () => {
    this.setState({check:false,agree:false})
  }

  render() {
    const {check,agree} = this.state
    console.log("rendered")
    return (
      <>
      <div className='main-container'>
        <h1 className='main-heading'>Eye Tester</h1>
        <div className='diseases-container'>
          <h1 className='heading'>Diseases can be found</h1>
          <ul>
            <li>head ache</li>
            <li>brain tumor</li>
          </ul>
        </div>
        <div className='diseases-container'>
            <h1 className='heading'>terms and conditions</h1>
            <ul>
              <li>i accept</li>
              <li>i follow</li>
            </ul>
          </div>
          <input type="checkbox" checked={check} onChange={this.onCheck} />
          <div>
          {check ? <button onClick={this.agreeButton}>Agree</button> : <p>Agree</p>}
          {agree ? <Link to='/cam'><button onClick={this.nextButton}>Next</button></Link> : null}
          </div>
      </div>
      </>
    )
  }
}

export default Home