import React from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    
} from 'mdb-react-ui-kit';
import { MDBNavItem, MDBDropdownToggle, MDBDropdownItem, MDBDropdown, MDBDropdownMenu } from 'mdbreact';

export default function App(props) {
    return (
        <header>
            <MDBNavbar expand='lg' light bgColor='white'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>

                    <div className='collapse navbar-collapse' id='navbarExample01'>
                        <MDBNavbarNav left className='mb-2 mb-lg-0'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='/'>About</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/ListCurso'>Listar cursos</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav className='navbar-expand-lg justify-content-end'>

                            <MDBNavItem>
                                <MDBDropdown tag='li' className='nav-item dropleft' >
                                    <MDBDropdownToggle nav caret>
                                        <MDBIcon icon="user" className="d-none d-md-inline"/>
                                    </MDBDropdownToggle>

                                    <MDBDropdownMenu className="dropdown-default ">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>

                    </div>


                </MDBContainer>
            </MDBNavbar>

        </header >
    );
}