class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :description, :title, :ends_at, :reserve_price, :created_at, :user, :status

  has_many :bids
  belongs_to :user

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :username
  end

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_price, :created_at, :user
    belongs_to :user
  end

end
