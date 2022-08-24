import dateFormat from 'dateformat';

function AuctionDetails(props) {
    return(
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Created by {props.user}</p>
        <p>Reserve price: ${props.reserve_price}</p>
        <p>Ends at: {dateFormat(props.ends_at, "mmmm dS, yyyy")}</p>
      </div>
    )
  }
  
  export default AuctionDetails;