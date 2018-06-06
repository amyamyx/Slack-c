class CreateDirects < ActiveRecord::Migration[5.1]
  def change
    create_table :directs do |t|
      t.integer :team_id, null: false

      t.timestamps
    end
    add_index :directs, :team_id
  end
end
