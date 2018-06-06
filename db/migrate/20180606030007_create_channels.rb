class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.integer :team_id, null: false
      t.boolean :public, null: false, default: true
      t.string :purpose

      t.timestamps
    end
    add_index :channels, :creator_id
    add_index :channels, :team_id
  end
end
