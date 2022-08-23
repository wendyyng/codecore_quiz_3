const BidDetails = (props) => {
  const {bid_price, created_at} = props
  return(
    <div>
      <p>${bid_price} on {created_at.toLocaleString()}</p>
    </div>
  )
}

export default BidDetails