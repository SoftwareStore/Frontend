import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

function ProfileModal() {
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

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
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='container-fluid bd-example-row'>
                <div className='row'>
                  <div className='col-md-6 col-example'>
                      <h6>Nombre: name1</h6>
                      <h6>Apellido: Apellido 1</h6>
                      <h6>Email: email@goil.vom</h6>
                      <h6>Cursos:</h6>
                      <div className='container-fluid bd-example-row'>
                        <div className='row'>
                          <div className='.col-md-3 .ms-auto col-example'>
                            <u>
                              <li>crso1</li>
                              <li>crso2</li>
                              <li>crso3</li>
                            </u>
                          </div>
                        </div>
                      </div>

                  </div>
                  <div className='col-md-4 ms-auto col-example'>Colocar Imagen</div>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </>
  );
}

export default ProfileModal