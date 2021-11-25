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

  function CrearTareaModal({toggleCrearTareaModal}) {
  const [varyingCodigo, setVaryingCodigo] = useState('');
  const [varyingNombre, setVaryingNombre] = useState('');
  const [varyingTarea, setVaryingTarea] = useState('');


  const onChangeCodigo = (event) => {
    setVaryingCodigo(event.target.value);
  };

  const onChangeNombre = (event) => {
    setVaryingNombre(event.target.value);
  };

  const onChangeTarea = (event) => {
    setVaryingTarea(event.target.value);
  };

  return (
    <>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Crear Tarea</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleCrearTareaModal}></MDBBtn>
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
                        value={varyingTarea}
                        onChange={onChangeTarea}
                        labelclassName='col-form-label'
                        label='Tipo de curso:'
                        />
                  </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleCrearTareaModal}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </>
  );
}
export default CrearTareaModal