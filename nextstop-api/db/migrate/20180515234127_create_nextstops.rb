class CreateNextstops < ActiveRecord::Migration[5.2]
  def change
    create_table :nextstops do |t|
      t.string :name
      t.integer :budget
      t.string :img_url
      t.integer :like
      t.integer :dislike

      t.timestamps
    end
  end
end
