class Api::V1::AuctionsController < Api::ApplicationController
    def index
        auctions = Auction.order(id: :desc)
        render(json: auctions)
    end

    def show
        auction = Auction.find(params[:id])
        render(json: auction)
    end

    def create
        auction = Auction.new(auction_params)
        auction.user = current_user
        auction.save!
        render json: { id: auction.id }
    end

    private

    def auction_params
        params.require(:auction).permit(:title, :description, :ends_at, :reserve_price)
    end

end
