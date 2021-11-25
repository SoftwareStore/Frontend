import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';

  function CrearAnuncioModal({toggleCrearAnuncioModal}) {
  const [varyingCodigo, setVaryingCodigo] = useState('');
  const [varyingProfesor, setVaryingProfesor] = useState('');
  const [varyingAnuncio, setVaryingAnuncio] = useState('');


  const onChangeCodigo = (event) => {
    setVaryingCodigo(event.target.value);
  };

  const onChangeProfesor = (event) => {
    setVaryingProfesor(event.target.value);
  };

  const onChangeAnuncio = (event) => {
    setVaryingAnuncio(event.target.value);
  };

  return (
    <>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Crear Anuncio</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleCrearAnuncioModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                  <div className = 'mb-3'>
                        <MDBInput
                        value={varyingCodigo}
                        onChange={onChangeCodigo}
                        labelclassName='col-form-label'
                        label='Código:'
                        />
                  </div>
                  <div className = 'mb-3'>
                        <MDBInput
                        value={varyingProfesor}
                        onChange={onChangeProfesor}
                        labelclassName='col-form-label'
                        label='Nombre Profesor:'
                        />
                  </div>
                  <div className = 'mb-3'>
                        <MDBInput
                        value={varyingAnuncio}
                        onChange={onChangeAnuncio}
                        labelclassName='col-form-label'
                        label='Anuncio:'
                        />
                  </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleCrearAnuncioModal}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </>
  );
}
export default CrearAnuncioModal