class CreateMessagesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.text :content, null: false
      t.references :messageable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
