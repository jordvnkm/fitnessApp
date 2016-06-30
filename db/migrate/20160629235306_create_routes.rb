class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.integer :author_id, null: false
      t.string :name, null: false
      t.integer :location_id, null: false

      t.timestamps
    end
    add_index :routes, :author_id
    add_index :routes, :location_id
  end
end
