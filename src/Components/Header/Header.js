import React from 'react';

class Header extends React.Component {
    render(){
        return(
        <div className="container-fluid">
            <a className="navbar-brand" href="/">ClassRoom!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Register">Registro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ListCurs">ListCurs</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Busqueda</button>
                </form>
            </div>
        </div>
    )
    }

}

export default Header;