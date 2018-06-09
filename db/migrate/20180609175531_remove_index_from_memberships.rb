class RemoveIndexFromMemberships < ActiveRecord::Migration[5.1]
  def change
    remove_index :team_memberships, :user_id
    remove_index :direct_memberships, :user_id
    remove_index :channel_memberships, :user_id
  end
end
