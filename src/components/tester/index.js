import {Link} from 'react-router-dom'
import './index.css'
const Tester = () => (
    <div className='tmaincont'>
      <div className='prec'>
        <ul>
              <li >clean your eyes properly</li>
              <li >dont put the device very near to your eye</li>
        </ul>
        </div>
        <img src='' alt='camera' className='img' />
        <button color="white" appearance="primary">Click here to scan</button>
        <Link to='/'><button color="white">back</button></Link>
      </div>
)

export default Tester