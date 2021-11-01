import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import './Main.css'
function Main(props) {

 const listData = [{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"},{code : 'ABC123',name:"Desarrollo de Software"}]

  const listCards = listData.map((item) =>
  <MDBCol sm='3'>
  <MDBCard className='mb-4'>
    <MDBCardBody>
      <MDBCardTitle>{item.code}</MDBCardTitle>
      <MDBCardText>
       {item.name}
      </MDBCardText>
      <MDBBtn href='#'>Ingresar</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>)

  return (
    <div className='cards-con'>
      <MDBRow  >
       {listCards}
      </MDBRow>
    </div>
  )
}

export default Main
