import { Component } from "react";
import './index.css';

class Home extends Component {
  state = {check:false,agree:false}

  onCheck = (event) => {
    this.setState({check:event.target.checked})
  }

  agreeButton = () => {
    this.setState({agree:true})
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
          <input type="checkbox" onChange={this.onCheck} />
          <div>
          {check ? <button onClick={this.agreeButton}>Agree</button> : <p>Agree</p>}
          {agree ? <button>Next</button> : null}
          </div>
      </div>
      </>
    )
  }
}

export default Home