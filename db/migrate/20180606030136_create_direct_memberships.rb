class CreateDirectMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :direct_memberships do |t|
      t.integer :user_id, null: false
      t.integer :direct_id, null: false

      t.timestamps
    end
    add_index :direct_memberships, [:direct_id, :user_id], unique: true
    add_index :direct_memberships, :user_id
  end
end
