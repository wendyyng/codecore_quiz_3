# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Auction.destroy_all
Bid.destroy_all

PASSWORD = "123"
super_user = User.create(
  username: "Admin_User",
  email: "admin@user.com",
  password: PASSWORD,
  is_admin: true
)

10.times do 
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
      username: "#{first_name}_#{last_name}",
      email: "#{first_name}@#{last_name}.com",
      password: PASSWORD,
      is_admin: false
    )
  end
  
users = User.all

10.times do
    created_at = Faker::Date.backward(days: 7)

    p = Auction.create({
      title: Faker::Commerce.product_name,
      description: Faker::Hipster.sentence,
      reserve_price: Faker::Commerce.price,
      ends_at: Faker::Date.forward(days: 14),
      created_at: created_at,
      updated_at: created_at,
      user: users.sample,
      status: "published"
    })

  if p.valid?
    rand(1..3).times do
        Bid.create(bid_price: Faker::Commerce.price, auction: p, user: users.sample)
      end
  end

end

auctions = Auction.all
bids = Bid.all

p "created #{auctions.count} auctions, #{bids.count} bids, #{users.count} users"
