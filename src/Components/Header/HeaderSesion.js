import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon
} from 'mdb-react-ui-kit';
import { MDBNavItem, MDBDropdownToggle, MDBDropdownItem, MDBDropdown, MDBDropdownMenu } from 'mdbreact';
import Logo from '../../Assets/Img/logoA.png'

export default function App() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/'>
            <img src={Logo} className='logoA' style={{ width: '45px' }} />
          </MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/ListCurso'>Listar cursos</MDBNavbarLink>
              </MDBNavbarItem>
             
            </MDBNavbarNav>
            <MDBDropdown tag='li' className='nav-item dropleft' >
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" className="d-none d-md-inline" />
              </MDBDropdownToggle>

              <MDBDropdownMenu className="dropdown-default ">
                <MDBDropdownItem href="#!">Perfil</MDBDropdownItem>
                <MDBDropdownItem href="#!">Crear curso</MDBDropdownItem>
                <MDBDropdownItem href="#!">Cerrar sesion</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}