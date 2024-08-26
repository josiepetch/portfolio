import { Link } from 'react-router-dom';
import './index.scss';

export const Project = () => {

    return (
        <div className="container project-page">
            <div className="text-zone">
                <ul>
                    <li><Link to={'./booking'}><h1>Booking system</h1></Link></li>
                    <li><Link to={'./dashboard'}><h1>Dashboard</h1></Link></li>
                    <li><Link to={'./logbook'}><h1>Logbook</h1></Link></li>
                </ul>
            </div>
        </div>
    )
}
