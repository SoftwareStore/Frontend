import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="/about">Sobre Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">© {(new Date().getFullYear())} PreciosYa! All Right Reserved.</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Email: contact@PreciosYa.com</a>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Footer;