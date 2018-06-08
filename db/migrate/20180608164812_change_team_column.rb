class ChangeTeamColumn < ActiveRecord::Migration[5.1]
  def change
    add_index :teams, :name, unique: true
  end
end
