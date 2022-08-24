import React, { Component } from 'react'
import { Auction } from '../requests'
import AuctionDetails from "./AuctionDetails";
import { useState, useEffect } from 'react';
import BidList from "./BidList";

import NewBidForm from './NewBidForm';

export default function AuctionShowPage(props)  {
    const [ auction, setAuction ] = useState({})

    useEffect(() => {
        console.log(props.match.params.id)
        Auction.show(props.match.params.id) //no more hard copy - display the first that matches. Have access o the params ant the match method through our router
        .then((fetchedAPIauction) => {
          setAuction(fetchedAPIauction)
        })
      }, [])

      const { id, title, description, reserve_price, created_at, ends_at } = auction
      console.log(auction)
  return (
    <div class="container my-auto" id="auction-show-container">
        <AuctionDetails
         title={title}
         description={description}
         reserve_price={reserve_price}
         created_at={created_at}
         user={auction.user.username}
         ends_at={ends_at}
        />
        <NewBidForm  id={id}/>
        <BidList list={auction.bids}/>
    </div>
  )
}
