class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.decimal :center_lat, precision: 10, scale: 6, null: false
      t.decimal :center_lng, precision: 10, scale: 6, null: false

      t.timestamps;
    end
    add_index :locations, :name
  end
end
