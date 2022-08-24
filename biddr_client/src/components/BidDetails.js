import dateFormat from 'dateformat';

const BidDetails = (props) => {
  const {bid_price, created_at} = props
  return(
    <div>
      <p>${bid_price} on {dateFormat(created_at, "mmmm dS, yyyy")}</p>
    </div>
  )
}

export default BidDetails