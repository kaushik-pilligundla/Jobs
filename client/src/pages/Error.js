import Wrapper from '../assets/wrappers/ErrorPage.js'
import ErrorImg from '../assets/images/not-found.svg'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={ErrorImg} alt="not found" />
                <h3>Ohh!! Page Not found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to="/">Back to Home</Link>
            </div>
        </Wrapper>
    )
}
export default Error