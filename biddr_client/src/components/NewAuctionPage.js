import React, { Component } from 'react';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';

class NewAuctionPage extends Component {
    constructor(props){
        super(props);
        this.state = { errors: [] };
        this.createNewAuction = this.createNewAuction.bind(this)
    }

    createNewAuction(params) {
        // console.log(`Params: ${params.title} ${params.description}`)
        Auction.create(params)
        .then((auction) => {
            console.log(`auction: ${auction.errors}`)
            if (auction.errors){
                console.log(`AuctionErrors: ${auction.errors}`, auction.errors)
                this.setState({errors: auction.errors})
            } else {
                //the history prop contains methods used to navigate
                this.props.history.push(`/auctions/${auction.id}`)
            }
        })
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Create An Auction</h1>
                </div>
                <div>    
                    <NewAuctionForm errors={this.state.errors} submitForm={(params) => this.createNewAuction(params)} />
                </div>
            </div>
        )
    }
}

export default NewAuctionPage;