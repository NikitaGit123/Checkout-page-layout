import React from 'react'

function Shipping() {
  return (
    <div className='shippingBox'>
        <div className='headbar'>
        <p className='compheading'>Shipping Details</p>
        <p className='paidtxt'>+Add Shipment</p>
        </div>
        <div className='shipBox'>
        <div>
            <span>Date/Time</span>
            <br></br><br></br>
            <span className='prodprice'>Oct 5,2022-4:4 PM</span>  
        </div>
        <div>
            <span>Status</span>
            <br></br><br></br>
            <span className='paidtxt'>Shipped</span>  
        </div>
        <div>
            <span>Carreir</span>
            <br></br><br></br>
            <span className='prodprice'>UPS</span>  
        </div>
        <div>
            <span>Tracking</span>
            <br></br><br></br>
            <span className='prodprice'>67867788888999</span>  
        </div>
        <div>
            <span><i class='fas fa-pen'></i></span>
        </div>
        </div>

             
    </div>
  )
}

export default Shipping
