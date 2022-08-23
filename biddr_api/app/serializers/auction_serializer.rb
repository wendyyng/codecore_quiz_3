class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :ends_at, :reserve_price
  has_many :bids

  belongs_to :user, key: :author

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :username
  end

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_price, :created_at
  end

end
