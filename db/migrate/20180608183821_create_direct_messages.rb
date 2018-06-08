class CreateDirectMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :direct_messages do |t|
      t.text :content, null: false
      t.integer :user_id, null: false
      t.integer :direct_id, null: false

      t.timestamps
    end
    add_index :direct_messages, :user_id
    add_index :direct_messages, :direct_id
  end
end
