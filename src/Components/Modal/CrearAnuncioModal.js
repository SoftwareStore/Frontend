import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function CrearAnuncioModal({ toggleCrearAnuncioModal }) {
  const [varyingCodigo, setVaryingCodigo] = useState('');
  const [varyingProfesor, setVaryingProfesor] = useState('');
  const [varyingAnuncio, setVaryingAnuncio] = useState('');

  const { id } = useParams();
  const [datevalueSubmit, setdateValueSubmit] = useState(new Date());


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
              <div className='mb-3'>
                <MDBInput
                  value={varyingCodigo}
                  onChange={onChangeCodigo}
                  labelclassName='col-form-label'
                  label='Titulo:'
                />
              </div>
              <div className='mb-3'>
                <MDBInput
                  value={varyingProfesor}
                  onChange={onChangeProfesor}
                  labelclassName='col-form-label'
                  label='Descripcion:'
                />
              </div>
              {/* <div className='mb-3'>
                <MDBInput
                  value={varyingAnuncio}
                  onChange={onChangeAnuncio}
                  labelclassName='col-form-label'
                  label='Anuncio:'
                />
              </div> */}

            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleCrearAnuncioModal}>
              Cerrar
            </MDBBtn>
            <MDBBtn onClick={() => {
              axios.post('https://classroombackend.herokuapp.com/api/announcement/newAnnouncement', {
                Title: varyingCodigo,
                Description: varyingProfesor,
                Submit: datevalueSubmit,
                code: id
              }).then(response => {
                if (response.status == 200) {
                  window.location.reload(false);
                }
      
              })
            }}>Enviar</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </>
  );
}
export default CrearAnuncioModal