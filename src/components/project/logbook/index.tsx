import './index.scss';
import p1 from '@/assets/images/logbook/p1.png';
import p2 from '@/assets/images/logbook/p2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Logbook = () => {
    return (
        <div className="container logbook-page">
            <div className="detail">
                <h1>Logbook</h1>

                <h2>Purpose</h2>
                <p>
                    The Logbook Management Website simplifies financial record-keeping for tax purposes.
                    It provides tools to create, manage, visualize, and export logbooks, ensuring efficient and accurate record maintenance.
                </p>
                <h2>Features</h2>
                <ol>
                    <li>Create and Manage Logbooks</li>
                    <ul>
                        <li><b>From Scratch</b>: Start a new logbook with a structured template.</li>
                        <li><b>Import from Excel</b>: Upload existing records directly.</li>
                    </ul>
                    <li>Generate Graphs</li>
                    <ul>
                        <li><b>Visualizations</b>: Create bar charts, line charts, and pie charts to analyze financial data.</li>
                        <li><b>Customization</b>: Tailor graphs to display specific trends and insights.</li>
                    </ul>
                    <li>Export to Excel</li>
                    <ul>
                        <li><b>Generate Reports</b>: Export logbook entries and graphs to Excel for detailed reporting and tax submissions.</li>
                        <li><b>Flexible Export</b>: Choose date ranges and data categories to include.</li>
                    </ul>
                </ol>
                <h2>Benefits</h2>
                <ul>
                    <li><b>Efficiency</b>: Streamlines financial record-keeping.</li>
                    <li><b>Accuracy</b>: Ensures precise and well-documented records.</li>
                    <li><b>Flexibility</b>: Adapts to various needs with import, visualization, and export options.</li>
                </ul>

                <h2>Tech stack</h2>
                <div className='flexListFilled'>
                    <div>React JS</div>
                    <div>TypeScript</div>
                    <div>HTML</div>
                    <div>CSS</div>
                </div>
                <div className='flexListFilled'>
                    <Link to={'https://josiepetch.github.io/react-excel_to_graph/'} target="_blank">
                        <FontAwesomeIcon icon={faDesktop} color='#fff' size="lg" />
                    </Link>
                </div>

                <div className="img-zone">
                    <div><p>Homepage</p><img src={p1} alt="" /></div>
                    <div><p>Dashborad</p><img src={p2} alt="" /></div>
                </div>
            </div>
        </div>
    )
}