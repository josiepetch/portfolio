import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar';
import './index.scss';

export const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">
                    <div className="top-tag-html">&lt;html&gt;</div>
                    &lt;body&gt;
                </span>
                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}