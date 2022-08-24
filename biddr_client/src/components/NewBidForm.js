import React, { useState } from "react";
import { Bid, Auction } from '../requests';

export default function NewBidForm (props) {
    const [ bid, setBid ] = useState('')
    const { id, bids } = props
    const onChange = (e) => {
        setBid(e.target.value);
      };
      
    const handleBid = (e) => {
        const formData= new FormData(e.currentTarget);
        const params={
            bid_price: formData.get('bid_price'),
        }
        Bid.create(id, params)
        .then(()=>{
            Auction.show(id)
        })
    }
    let currentBid
    if(bids){
      currentBid = Math.max(...props.bids)
    }

    return (
        <form onSubmit={e => handleBid(e)}>
          <div>
            <label htmlFor="bid_price">Bid Price</label>
            <br />
            <input type="number" name="bid_price" id=""
                value={bid}
                onChange={e => onChange(e)} min={currentBid > 0 ? Math.round(currentBid) : "1"}
            />
          </div>
          <div>
            <input className="btn btn-sm btn-secondary mt-2" type="submit" value="Bid" />
          </div>
        </form>
      );
}