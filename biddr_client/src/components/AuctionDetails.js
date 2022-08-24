import dateFormat from 'dateformat';

function AuctionDetails(props) {
  let currentPrice
  if(props.bids.length){
    currentPrice = Math.max(...props.bids)
  }

    return(
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Reserve price: ${props.reserve_price}</p>
        <p>Current price: ${currentPrice} </p>
        <p>Ends at: {dateFormat(props.ends_at, "mmmm dS, yyyy")}</p>
        <p>Status: {currentPrice < props.reserve_price ? "Reserve price not met": "Reserve price met"}</p>
      </div>
    )
  }
  
  export default AuctionDetails;