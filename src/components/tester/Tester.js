import {Link} from 'react-router-dom'
import './Tester.css'
import camimage from './camera1.png'
const Tester = () => (
  <div className='tester-main-container'>
    <ul className='tester-precautions'>
        <li >clean your eyes properly</li>
        <li >dont put the device very near to your eye</li>
    </ul>
    <img src={camimage} alt='camera' className='img' />
    <Link to='/camera'><button className='click-button'>Click here to scan</button></Link>
    <Link to='/home'><button className='click-button'>Back</button></Link>
    <div className='other-options'>
      <Link to='concerneddoctor'><button >CONCERNED DOCTOR</button></Link>
      <Link to='remedies'><button >QUICK REMEDIES</button></Link>
      <Link to='precautions'><button >PRECAUTIONS TO TAKE</button></Link>
    </div>
  </div>
      
)
export default Tester