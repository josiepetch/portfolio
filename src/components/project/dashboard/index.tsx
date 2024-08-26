import './index.scss';
import login from '@/assets/images/booking/login.png';
import welcome from '@/assets/images/admin/dashboard.png';

export const Dashboard = () => {
    return (
        <div className="container dashboard-page">
            <div className="detail">
                <h1>Dashboard</h1>

                <h2>Purpose</h2>
                <p>
                    The Internal System streamlines and automates data management between different platforms, ensuring up-to-date records and efficient synchronization.
                </p>
                <h2>Features</h2>
                <ol>
                    <li>Cron Task for MYOB Syncing</li>
                    <ul>
                        <li><b>Product Records</b>: Automatically sync new product records with MYOB.</li>
                        <li><b>Inventory Updates</b>: Keep inventory levels up-to-date with periodic syncs.</li>
                    </ul>
                    <li>Fetch Data from Shopify</li>
                    <ul>
                        <li><b>Gift Cards</b>: Retrieve and manage gift card data.</li>
                        <li><b>Orders</b>: Fetch and process order information.</li>
                        <li><b>Product List</b>: Access and update the product catalog.</li>
                    </ul>
                </ol>
                <h2>Benefits</h2>
                <ul>
                    <li><b>Automation</b>: Reduces manual data entry and synchronization tasks.</li>
                    <li><b>Accuracy</b>: Ensures that product and inventory data are consistently updated.</li>
                    <li><b>Integration</b>: Seamlessly connects MYOB and Shopify, facilitating smooth data management.</li>
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

                <div className="img-zone">

                    <div>
                        <p>Login</p>
                        <img src={login} alt="" />
                    </div>
                    <div>
                        <p>Main page</p>
                        <img src={welcome} alt="" className='big' />
                    </div>
                </div>
            </div>
        </div>
    )
}