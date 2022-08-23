class Api::V1::BidsController < Api::ApplicationController
    def create
        bid = Bid.new bid_params
        bid.user = current_user
        bid.save!
        render json: bid
    end

    private

    def bid_params
        params.permit(:bid_price, :auction_id)
      end

end
