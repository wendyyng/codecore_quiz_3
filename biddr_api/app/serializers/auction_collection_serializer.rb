class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :reserve_price, :user, :bids
end
