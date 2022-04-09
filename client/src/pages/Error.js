import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
return (
  <Wrapper className='full-page'>
    <div>
      <img src={img} alt='not found' style={{maxHeight: '450px'}}/>
      <h3>Ohh! page abducted</h3>
        <p>We can't seem to find the page you're looking for</p>
      <Link to='/' className='btn btn-home'>back home</Link>
    </div>
  </Wrapper>
)
}

export default Error