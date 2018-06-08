class AddColumnToDirects < ActiveRecord::Migration[5.1]
  def change
    add_column :directs, :visible, :boolean, default: true, null: false
  end
end
