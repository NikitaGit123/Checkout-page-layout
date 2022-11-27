import React from 'react'

function Sales() {
  return (
    <div className='SalesBox'>
       <p className='compheading'>Ship Summery</p>
       <div className='salesBx'>
         <div className='B1'>
         <span>Seller payout <span className='pay'>Pay</span><span className='pal'>Pal</span></span>
         <span style={{fontWeight:600}}>$530.14</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>sales ID</span>
         <span>SWKM7387</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Date Sold</span>
         <span>Sep 30,2022-3:34 PM</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Date Completed</span>
         <span>Oct 5,2022-4:44 PM</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Order Total</span>
         <span>$56.84</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Tax</span>
         <span>$0.00</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Add-On(s)</span>
         <span>$0.00</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Shipping</span>
         <span>$0.00</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Buyer Fee</span>
         <span>$0.00</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Ask Price</span>
         <span>$55.00</span> 
         </div>
         <hr />

         <div className='B1'>
         <span>Seller Fee</span>
         <span>$73.4</span> 
         </div>

       </div>

    </div>
  )
}

export default Sales
