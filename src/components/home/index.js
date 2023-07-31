import { Component } from "react";
import './index.css';
class Home extends Component {
  state = {check:false,check1:false,check2:false,agree:false}

  onCheck1 = (event) => {
    const {check2} = this.state
    this.setState({check1:event.target.checked})
    if(check2) {
      this.setState({check:event.target.checked})
    }
  }

  onCheck2 = (event) => {
    const {check1} = this.state
    this.setState({check2:event.target.checked})
    if(check1) {
      this.setState({check:event.target.checked})
    }
  }

  agreeButton = () => {
    this.setState({agree:true})
  }

  nextButton = () => {
    const {history} = this.props
    this.setState({check1:false,check2:false,agree:false})
    history.replace('/cam');
  }

  render() {
    const {check,check1,check2,agree} = this.state
    console.log("rendered")
    return (
      <>
      <div className='main-container'>
        <h1 className='main-heading'>Eye Tester</h1>
        <div className='diseases-container'>
          <h1 className='heading'>Diseases can be found</h1>
          <ol className='diseases'>
            <li>    Aneurysm</li>
            <li>    Brain Tumor</li>
            <li>    Blood,tissue cancers</li>
            <li>    Diabetes</li>
            <li>    Giant cell arteritis</li>
            <li>    Heart disease</li>
            <li>    High bp</li>
            <li>    High cholestrol</li>
            <li>    Lupus</li>
            <li>    Lymedisease</li>
            <li>    Medication toxicities</li>
            <li>    Multiple sclerosis</li>
            <li>    Myasthenia gravis</li>
            <li>    Rheumatoid arthritis</li>
            <li>    Sarcoidosis</li>
            <li>    Thyroid disease</li>
            <li>    Vascular disease</li>
            <li>    Vitamin A deficiency</li>
          </ol>
        </div>
        <div className='diseases-container'>
            <h1 className='heading'>terms and conditions</h1>
            <div className="terms">
              <input type="checkbox" checked={check1} onChange={this.onCheck1} />
              <p>i accept</p>
            </div>
            <div className="terms">
              <input type="checkbox" checked={check2} onChange={this.onCheck2} />
              <p>i follow</p>
            </div>
          </div>
          <div>
          {check ? <button onClick={this.agreeButton}>Agree</button> : <p>Agree</p>}
          {agree ? <button onClick={this.nextButton}>Next</button> : null}
          </div>
      </div>
      </>
    )
  }
}

export default Home