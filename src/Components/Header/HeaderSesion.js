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
  MDBIcon,

  MDBModal
} from 'mdb-react-ui-kit';
import { MDBNavItem, MDBDropdownToggle, MDBDropdownItem, MDBDropdown, MDBDropdownMenu } from 'mdbreact';
import Logo from '../../Assets/Img/logoA.png'

import PerfilModal from '../Modal/PerfilModal';
import CrearCursoModal from '../Modal/CrearCursoModal';
import CrearAnuncioModal from '../Modal/CrearAnuncioModal';
import CrearTareaModal from '../Modal/CrearTareaModal';

export default function App() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  const [gridPerfilModal, setGridPerfilModal] = useState(false);
  const togglePerfilModal = () => setGridPerfilModal(!gridPerfilModal);

  const [gridCrearCursoModal, setGridCrearCursoModal] = useState(false);
  const toggleCrearCursoModal = () => setGridCrearCursoModal(!gridCrearCursoModal);
  
  const [gridCrearAnuncioModal, setGridCrearAnuncioModal] = useState(false);
  const toggleCrearAnuncioModal = () => setGridCrearAnuncioModal(!gridCrearAnuncioModal);

  const [gridCrearTareaModal, setGridCrearTareaModal] = useState(false);
  const toggleCrearTareaModal = () => setGridCrearTareaModal(!gridCrearTareaModal);

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
                <MDBNavbarLink href='/ListCurso'>Ver cursos</MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href='/VerCurso'>Ver curso</MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
            <MDBDropdown tag='li' className='nav-item dropleft' >
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" className="d-none d-md-inline" />
              </MDBDropdownToggle>

              <MDBDropdownMenu className="dropdown-default ">
                <MDBDropdownItem onClick={togglePerfilModal} href="#!">Perfil</MDBDropdownItem>
                <MDBDropdownItem onClick={toggleCrearCursoModal} href="#!">Crear curso</MDBDropdownItem>
                <MDBDropdownItem onClick={toggleCrearTareaModal} href="#!">Crear tarea</MDBDropdownItem>
                <MDBDropdownItem onClick={toggleCrearAnuncioModal} href="#!">Crear anuncio</MDBDropdownItem>
                <MDBDropdownItem href="http://localhost:5000/auth/logout">Cerrar sesion</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <MDBModal tabIndex='-1' show={gridPerfilModal}>
        <PerfilModal togglePerfilModal={togglePerfilModal}/>
      </MDBModal>
      <MDBModal tabIndex='-1' show={gridCrearCursoModal}>
        <CrearCursoModal toggleCrearCursoModal={toggleCrearCursoModal}/>
      </MDBModal>
      <MDBModal tabIndex='-1' show={gridCrearAnuncioModal}>
        <CrearAnuncioModal toggleCrearAnuncioModal={toggleCrearAnuncioModal}/>
      </MDBModal>
      <MDBModal tabIndex='-1' show={gridCrearTareaModal}>
        <CrearTareaModal toggleCrearTareaModal={toggleCrearTareaModal}/>
      </MDBModal>
      
    </>
  );
}