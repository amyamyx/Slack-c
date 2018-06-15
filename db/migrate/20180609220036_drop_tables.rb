class DropTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :channel_messages
    drop_table :direct_messages
  end
end
