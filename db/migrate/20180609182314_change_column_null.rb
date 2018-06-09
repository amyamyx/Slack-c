class ChangeColumnNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :teams, :creator_id, false
  end
end
