import BidDetails from "./BidDetails";

export default function BidList(props) {
  const bids = props.list

  return(
    <div>
      <h4><u>Previous Bids</u></h4>
      <div>
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
      </div>
    </div>
  )
}