import logoTitle from '@/assets/images/logo-j.png';
import './index.scss';

export const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, I'm <img src={logoTitle} alt="developer" />osie
                    <br />
                    Web developer
                </h1>
            </div>
        </div>
    )
}