import './index.scss';
import login from '@/assets/images/booking/login.png';
import dashStaff from '@/assets/images/booking/dashboard-staff.png';
import dashSupplier from '@/assets/images/booking/dashboard-supplier.png';
import booking from '@/assets/images/booking/booking.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Booking = () => {
    return (
        <div className="container booking-page">
            <div className="detail">
                <h1>Booking</h1>

                <h2>Purpose</h2>
                <p>
                    The Delivery Scheduling Website manages and tracks delivery bookings to a warehouse, providing an organized system for scheduling, confirmation, and visibility of future deliveries.
                </p>
                <h2>Features</h2>
                <ol>
                    <li>Schedule Delivery Bookings</li>
                    <ul>
                        <li><b>Booking Interface</b>: Schedule delivery slots for various dates and times.</li>
                        <li><b>Real-Time Availability</b>: Check and select available time slots.</li>
                    </ul>
                    <li>Email Confirmation</li>
                    <ul>
                        <li><b>Instant Notification</b>: Automatically send confirmation emails after booking a delivery.</li>
                        <li><b>Booking Details</b>: Include all relevant details in the confirmation email.</li>
                    </ul>
                    <li>Staff Account Dashboard</li>
                    <ul>
                        <li><b>View Future Bookings</b>: Access a comprehensive list of all scheduled deliveries.</li>
                        <li><b>Manage Appointments</b>: Edit or cancel bookings as needed.</li>
                    </ul>
                </ol>
                <h2>Benefits</h2>
                <ul>
                    <li><b>Organization</b>: Streamlines scheduling and tracking of deliveries.</li>
                    <li><b>Efficiency</b>: Automates confirmation and provides clear visibility of future bookings.</li>
                    <li><b>Accessibility</b>: Ensures staff can easily manage and review delivery schedules.</li>
                </ul>

                <h2>Tech stack</h2>
                <div className='flexListFilled'>
                    <div>React JS</div>
                    <div>TypeScript</div>
                    <div>Node JS</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>SCSS</div>
                    <div>Bootstrap</div>
                    <div>API</div>
                    <div>MySql</div>
                </div>
                <div className='flexListFilled'>
                    <Link to={'https://delivery.toysrus.com.au/'} target="_blank">
                        <FontAwesomeIcon icon={faDesktop} color='#fff' size="lg" />
                    </Link>
                </div>

                <div className="img-zone">
                    <div><p>Login</p><img src={login} alt="" /></div>
                    <div><p>Dashborad - Staff</p><img src={dashStaff} alt="" /></div>
                    <div><p>Dashborad - Supplier</p><img src={dashSupplier} alt="" /></div>
                    <div><p>Booking - Supplier</p><img src={booking} alt="" /></div>
                </div>
            </div>
        </div>
    )
}