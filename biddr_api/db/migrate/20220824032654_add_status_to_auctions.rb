class AddStatusToAuctions < ActiveRecord::Migration[7.0]
  def change
    add_column :auctions, :status, :text, default: "draft"
  end
end
