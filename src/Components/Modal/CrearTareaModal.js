import React, { useState } from 'react';
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
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
function CrearTareaModal({ toggleCrearTareaModal }) {
  const { id } = useParams();
  const [varyingCodigo, setVaryingCodigo] = useState('');
  const [varyingNombre, setVaryingNombre] = useState('');
  const [datevalueFrom, setdateValueFrom] = React.useState(new Date());
  const [datevalueTo, setdateValueTo] = React.useState(new Date());


  const onChangeCodigo = (event) => {
    setVaryingCodigo(event.target.value);
  };

  const onChangeNombre = (event) => {
    setVaryingNombre(event.target.value);
  };

  const handleChangeFrom = (newdateValuefrom) => {
    setdateValueFrom(newdateValuefrom);
  };
  const handleChangeTo = (newdateValueto) => {
    setdateValueTo(newdateValueto);
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
                  value={varyingNombre}
                  onChange={onChangeNombre}
                  labelclassName='col-form-label'
                  label='Descripcion:'
                />
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DateTimePicker
                    className='mb-3 '
                    label="Desde"
                    value={datevalueFrom}
                    onChange={handleChangeFrom}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DateTimePicker
                    className='mb-3 '
                    label="Hasta"
                    value={datevalueTo}
                    onChange={handleChangeTo}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              {/* <div className='mb-3'>
                <MDBInput
                  value={varyingTarea}
                  onChange={onChangeTarea}
                  labelclassName='col-form-label'
                  label='Tipo de curso:'
                />
              </div> */}
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleCrearTareaModal}>
              Cerrar
            </MDBBtn>
            <MDBBtn onClick={() => {
              axios.post('http://localhost:5000/api/homework/newHomework', {
                Title: varyingCodigo,
                Description: varyingNombre,
                From: datevalueFrom,
                To: datevalueTo,
                code: id
              }).then(response => {
                if (response.status === 200) {
                  window.location.reload(false);
                }
              })
            }

            }>Enviar</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </>
  );
}
export default CrearTareaModal