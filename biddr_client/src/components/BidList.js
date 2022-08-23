import BidDetails from "./BidDetails";

export default function BidList(props) {
  const bids = props.list
  return(
    <div>
      <h4>Previous Bids</h4>
      <ul>
        {
          bids ?
          bids.map((b,i) => {
            return <BidDetails key={i} 
            bid_price={b.bid_price}
            
            created_at={b.created_at}
            id={b.id}
            />
          })
          :
          null
        }
      </ul>
    </div>
  )
}