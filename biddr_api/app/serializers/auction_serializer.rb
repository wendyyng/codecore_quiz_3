class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :ends_at, :price
end
