class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!, only:[:create]
    
    def create
        bid = Bid.new bid_params
        bid.user = current_user
        bid.save!
        if bid.save
            render json:bid
        else
            render(
                json: {errors: bid.errors},
                status: 422 
            )
        end
    end

    private

    def bid_params
        params.permit(:bid_price, :auction_id)
      end

end
