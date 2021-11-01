import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import './Main.css'


function Main(props) {
  // const listData = [{ code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }, { code: 'ABC123', name: "Desarrollo de Software" }]

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://classroombackend.herokuapp.com/api/course/index").then(response => {
      setData(response.data);
      setLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  }



  const listCards = data.map((item) =>
    <MDBCol sm='3'>
      <MDBCard className='mb-4'>
        <MDBCardBody>
          <MDBCardTitle>{item.Code}</MDBCardTitle>
          <MDBCardText>
            {item.Name}
          </MDBCardText>
          <MDBBtn href='#'>Ingresar</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>)

  return (

    < div className='cards-con' >

      <MDBRow  >
        {listCards}
      </MDBRow>
    </div >
  )
}

export default Main
