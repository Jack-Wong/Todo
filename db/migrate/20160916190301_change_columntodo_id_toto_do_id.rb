class ChangeColumntodoIdTotoDoId < ActiveRecord::Migration
  def change
    rename_column :steps, :todo_id, :to_do_id
  end
end
