import './index.scss'
import m1 from '@/assets/images/memory/m1.png';
import m2 from '@/assets/images/memory/m2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Memory = () => {
    return (
        <div className="container memory-page">
            <div className="detail">
                <h1>Magic memory</h1>

                <h2>Purpose</h2>
                <p>
                    Matching card game
                </p>

                <h2>Tech stack</h2>
                <div className='flexListFilled'>
                    <div>React JS</div>
                    <div>Javascript</div>
                    <div>HTML</div>
                    <div>CSS</div>
                </div>
                <div className='flexListFilled'>
                    <Link to={'https://josiepetch.github.io/magic-memory/'} target="_blank">
                        <FontAwesomeIcon icon={faDesktop} color='#fff' size="lg" />
                    </Link>
                </div>

                <div className="img-zone">
                    <div><img src={m1} alt="" /></div>
                    <div><img src={m2} alt="" /></div>
                </div>
            </div>
        </div>
    )
}
