class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :title
      t.text :body
      t.boolean :done

      t.timestamps null: false
    end
  end
end
