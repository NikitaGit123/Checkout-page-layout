import React from 'react'
import './style.css';


function ProductDetails(props) {
  return (
    <div className='box'>
      <p className='compheading'>Product details</p>
      <div className='BoxDetail'>
        <div className='phone'></div>
        <div className="phoneDetail">
            <p className='prodName'>{props.prodname}</p>
            <p>Serial No:<span style={{fontWeight:600}}>567878778954664</span></p>
            <p>Condition:<span style={{fontWeight:600}}>Mint</span></p>
            <p>Listing:<span className='paidtxt'>LWKA34666</span></p>
        </div>
        <div className='paidBtn'>paid</div>
        <br></br>
        <div className='DBx'>

            <div>
            <span>Ask price</span>
            <br></br><hr></hr>
            <span className='prodprice'>$534.00</span>
            </div>

            <div>
            <span>Buy Price</span>
            <br></br><hr></hr>
            <span className='prodprice'>$34.45</span>
            </div>

            <div>
            <span>Sell price</span>
            <br></br><hr></hr>
            <span className='prodprice'>$34.45</span>
            </div>

            <div>
            <span>Tax</span>
            <br></br><hr></hr>
            <span className='prodprice'>$0.00</span>
            </div>

            <div>
            <span>Shipping</span>
            <br></br><hr></hr>
            <span className='prodprice'>$0.00</span>
            </div>

            <div>
            <span>Total</span>
            <br></br><hr></hr>
            <span className='prodprice'>$567.89</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
