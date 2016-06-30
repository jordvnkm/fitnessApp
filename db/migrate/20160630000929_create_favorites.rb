class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :route_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :favorites, :route_id
    add_index :favorites, :user_id
  end
end
