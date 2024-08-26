import { Link } from 'react-router-dom';
import './index.scss';

export const Project = () => {

    return (
        <div className="container project-page">
            <div className="text-zone">
                <h1>Projects</h1>
                <ul>
                    <li><Link to={'./booking'}><h2>Booking system</h2></Link></li>
                    <li><Link to={'./dashboard'}><h2>Dashboard</h2></Link></li>
                    <li><Link to={'./logbook'}><h2>Logbook</h2></Link></li>
                    <li><Link to={'./memory'}><h2>Memory</h2></Link></li>
                </ul>
            </div>
        </div>
    )
}
