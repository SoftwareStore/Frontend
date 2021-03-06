import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='p-5 text-center bg-image'
                style={{ backgroundImage: "url(/Reunion01.jpeg)", height: 778 }}>
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Bienvenidos</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;