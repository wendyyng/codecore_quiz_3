class Api::V1::AuctionsController < Api::ApplicationController
    def index
        auctions = Auction.order(id: :desc)
        render(json: auctions, each_serializer: AuctionCollectionSerializer)
    end

    def show
        auction = Auction.find(params[:id])
        render(json: auction)
    end

    def create
        auction = Auction.new(auction_params)
        # auction.user = current_user
        auction.save!
        render json: { id: auction.id }
    end

end
