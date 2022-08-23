const BidDetails = (props) => {
  const {bid_price, author, created_at} = props
  return(
    <div>
      <p>${bid_price} on {created_at.toLocaleString()} by {author}</p>
    </div>
  )
}

export default BidDetails