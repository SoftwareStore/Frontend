import React, { useState, useEffect } from 'react';
import { MDBBtn,
  
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import axios from 'axios';
import Imgp from '../../Assets/Img/perfil.png'

function ProfileModal({togglePerfilModal}) {
  const [data, setData] = useState([]);
  const [dataC, setDataC] = useState([]);
  useEffect(() => {
    //consulta a la api con el id del link
    axios.get("http://localhost:5000/api/user/login",{withCredentials: true}).then(response => {
        setData(response.data[0]);
    });
    axios.get("http://localhost:5000/api/user/courses",{withCredentials: true}).then(response => {
      setDataC(response.data);
    });
}, []);


const listC =dataC.map((item) =>
<li>{item.Name}</li>)
  return (
    <>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Perfil</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={togglePerfilModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='container-fluid bd-example-row'>
                <div className='row'>
                  <div className='col-md-6 col-example'>
                    <h6>Nombre: {data.firstName}</h6>
                    <h6>Apellido: {data.lastName}</h6>
                      <h6>Email: {data.email}</h6>
                      <h6>Rol: {data.role}</h6>
                      <h6>Cursos:</h6>
                      <div className='container-fluid bd-example-row'>
                        <div className='row'>
                          <div className='.col-md-3 .ms-auto col-example'>
                            <u>
                              {listC}
                            </u>
                          </div>
                        </div>
                      </div>

                  </div>
                  <div className='col-md-4 ms-auto col-example'>
                    <img src={Imgp} alt='Foto' className='Perfil' style={{ width: '130px' }} />
                    </div>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={togglePerfilModal}>
                Close
              </MDBBtn>
              {/* <MDBBtn>Save changes</MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </>
  );
}

export default ProfileModal