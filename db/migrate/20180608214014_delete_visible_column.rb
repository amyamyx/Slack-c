class DeleteVisibleColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :directs, :visible
    add_column :direct_memberships, :visible, :boolean, null: false, default: true
  end
end
