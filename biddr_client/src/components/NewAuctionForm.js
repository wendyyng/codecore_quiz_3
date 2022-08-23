import React from 'react';

const NewAuctionForm = props => {
    
    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        console.log(fd.get("title"), fd.get("reserve_price"), fd.get("description"))
        props.submitForm(
            {
                title: fd.get("title"),
                description: fd.get("description"),
                reserve_price: fd.get("reserve_price"),
                ends_at: fd.get("ends_at"),
                created_at: new Date()
            }
        )

        event.currentTarget.reset()

    }

    return(
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="" required="required"/>

            </div>
            <div>
                <label htmlFor="description">Description</label>
                <br />
                <input type="text" name="description" id="" required="required"/>

            </div>
            <div>
                <label htmlFor="ends_at">Ends at</label>
                <br />
                <input type="date" name="ends_at" id="" required="required"/>

            </div>
            <div>
                <label htmlFor="reserve_price">Reserve Price</label>
                <br />
                <input type="number" name="reserve_price" id="" step="1" required="required"/>

            </div>
            <div>
                <input type="submit" value="Create Auction" />
            </div>
            
        </form>
    )


}

export default NewAuctionForm;