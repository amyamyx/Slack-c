class DropAndRecreateChannelMessages < ActiveRecord::Migration[5.1]
  def change
    drop_table :channel_messages
    create_table :channel_messages do |t|
      t.text :content, null: false
      t.integer :user_id, null: false
      t.integer :channel_id, null: false

      t.timestamps  
    end
    add_index :channel_messages, :user_id
    add_index :channel_messages, :channel_id
  end
end
