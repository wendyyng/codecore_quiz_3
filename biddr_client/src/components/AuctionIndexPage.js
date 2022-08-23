import React from 'react'
import { useState, useEffect } from 'react';
import { User, Auction } from "../requests";
import { Link } from "react-router-dom";
import dateFormat from 'dateformat';

export default function AuctionIndexPage () {
    const [auctions, setAuctions] = useState([])

    useEffect(() => {
        Auction.index()
        .then((auctionsData) => {
            setAuctions(auctionsData)
        })
    }, [])
  return (
    <>
    <h1>Auctions</h1>
        {
        auctions.map((a,i) => {
            return (
                <div>
                    <h1 key={i}><Link to={`/auctions/${a.id}`}>{a.title}</Link></h1>
                    <p>posted on {dateFormat(a.created_at, "mmmm dS, yyyy")}</p>
                </div>
            )
        })  
        }
</>
  )
}
