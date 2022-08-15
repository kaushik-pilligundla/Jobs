import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, explicabo voluptates! Iste,
                        nesciunt vel nobis cumque, tenetur sint aspernatur delectus ducimus aperiam numquam pariatur voluptas,
                        sequi tempore sunt repellendus ex.
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt="jobs" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing