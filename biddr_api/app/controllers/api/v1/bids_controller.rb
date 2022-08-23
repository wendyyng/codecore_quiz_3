class Api::V1::BidsController < Api::ApplicationController
    def create
        bid = Bid.new bid_params
        bid.user = current_user
        bid.save!
        render json: { id: bid.id }
    end

    private

    def bid_params
        params.permit(:price, :bid_id)
    end

end
