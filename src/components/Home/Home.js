import { Component } from "react";
import './Home.css';
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
    history.replace('/tester');
  }

  render() {
    const {check,check1,check2,agree} = this.state
    console.log("rendered")
    return (
      <>
      <div className='home-main-container'>
        <h1 className='home-main-heading'>OCCULA SCANNER<br/>(detect & protect)</h1>
        <div className='home-diseases-container'>
          <h1 className='diseases-heading'>Diseases can be found</h1>
          <ol className='diseases-list'>
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
        <div className='home-tc'>
            <h1 className='tc-heading'>Terms and Conditions</h1>
            <div className="home-checkbox">
              <input type="checkbox" checked={check1} onChange={this.onCheck1} /> I accept
            </div>
            <div className="home-checkbox">
              <input type="checkbox" checked={check2} onChange={this.onCheck2} /> I follow
            </div>
          </div>
          <div className="buttons-container">
            {check ? <button className="home-button" onClick={this.agreeButton}>Agree</button> : " "}
            {agree ? <button className="home-button" onClick={this.nextButton}>Next</button> : null}
          </div>
      </div>
      </>
    )
  }
}

export default Home