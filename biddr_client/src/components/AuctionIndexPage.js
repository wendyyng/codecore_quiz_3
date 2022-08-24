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
    <div className="container-fluid" id="auctions">
    <h1 className="text-center p-2">Auctions</h1>

    </div>
    <div className="container mx-4">
        {
        auctions.map((a,i) => {
            return (
                <div key={i} className="shadow p-3 mb-5 bg-white rounded my-auto col-sm-12">
                    <h3 ><Link className="fw-bold text-decoration-none" to={`/auctions/${a.id}`}>{a.title}</Link></h3>
                    <p>posted on {dateFormat(a.created_at, "mmmm dS, yyyy")}</p>
                </div>
            )
        })  
        }
    </div>
</>
  )
}
