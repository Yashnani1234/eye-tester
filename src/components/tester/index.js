import {Link} from 'react-router-dom'
import './index.css'
import camimage from './camera1.png'
const Tester = () => (
    <div className='tmaincont'>
      <div className='prec'>
        <ul>
              <li ><strong>clean your eyes properly</strong></li>
              <li ><strong>dont put the device very near to your eye</strong></li>
        </ul>
       </div>
        <img src={camimage} alt='camera' className='img' />
        <button className='clickbutton'>Click here to scan</button>
        <Link to='/home'><button ><strong>back</strong></button></Link>
      <div className='otheroptions'>
        <button ><strong>concerned doctor</strong></button>
        <button ><strong>quick remedies</strong></button>
        <button ><strong>precautions to be taken</strong></button>
        </div>

      </div>
      
)
export default Tester