import React from 'react'

function payments() {
  return (
    <div className='paymentsBx'>
       <p className='compheading'>Payments Details</p>
       <div className='PayBox'>
        <div>
            <span>Date/Time</span>
            <br></br>
            <span className='prodprice'>Sep 30,2022 2:16</span>  
        </div>
        <div>
           <span>Status</span>
            <br></br>
            <span className='paidtxt'>PAID</span> 
        </div>
        <div>
            <span>Amount</span>
            <br></br>
            <span className='prodprice'>$530.34</span> 
        </div>
        <div>
            <span>Ask price</span>
            <br></br>
            <span className='prodprice'>78587</span> 
        </div>
        <div>
            <span>payment reference Id</span>
            <br></br>
            <span className='prodprice'>8WP6788889954D</span> 
        </div>
        <div>
            <span>Type</span>
            <br></br>
            <span className='prodprice'>Payments to Seller</span> 
        </div>
        <div>
            <span>Payer</span>
            <br></br>
            <span className='prodprice'>Samuel.johns@gmail.com</span> 
        </div>
       </div>
    </div>
  )
}

export default payments
