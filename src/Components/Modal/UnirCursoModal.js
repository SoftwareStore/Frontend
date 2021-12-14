//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
 
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';

function UnirCursoModal({ toggleUnirCursoModal }) {
  const [varyingCodigo, setVaryingCodigo] = useState('');
  const [id, setid] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/login", { withCredentials: true }).then(response => {
      setid(response.data[0]._id);
    }).catch(err => {  });
  }, []);

  const envCodigo = async e => {
    await axios({
      method: "POST",
      url: "http://localhost:5000/api/user/courses", // <-- ruta Login del servidor
      data: {
        Code: varyingCodigo,
        participants: id
      },
      withCredentials: true,
    }).then(window.location.reload()).catch(err => {  })
  };


  const onChangeCodigo = (event) => {
    setVaryingCodigo(event.target.value);
  };

  return (
    <>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Unir Curso</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleUnirCursoModal}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <form>
              <div className='mb-3'>
                <MDBInput
                  value={varyingCodigo}
                  onChange={onChangeCodigo}
                  labelclassName='col-form-label'
                  label='Código:'
                />
              </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleUnirCursoModal}>
              Cerrar
            </MDBBtn>
            <MDBBtn onClick={envCodigo}>Enviar</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </>
  );
}
export default UnirCursoModal