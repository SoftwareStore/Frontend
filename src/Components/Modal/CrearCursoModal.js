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

function CrearCursoModal({toggleCrearCursoModal}) {
  const [varyingCodigo, setVaryingCodigo] = useState('');
  const [varyingNombre, setVaryingNombre] = useState('');
  const [varyingTipoCurso, setVaryingTipoCurso] = useState('');


  const onChangeCodigo = (event) => {
    setVaryingCodigo(event.target.value);
  };

  const onChangeNombre = (event) => {
    setVaryingNombre(event.target.value);
  };

  const onChangeTipoCurso = (event) => {
    setVaryingTipoCurso(event.target.value);
  };

  return (
    <>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Crear Curso</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleCrearCursoModal}></MDBBtn>
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
                        value={varyingNombre}
                        onChange={onChangeNombre}
                        labelclassName='col-form-label'
                        label='Nombre:'
                        />
                  </div>
                  <div className = 'mb-3'>
                        <MDBInput
                        value={varyingTipoCurso}
                        onChange={onChangeTipoCurso}
                        labelclassName='col-form-label'
                        label='Tipo de curso:'
                        />
                  </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleCrearCursoModal}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </>
  );
}
export default CrearCursoModal