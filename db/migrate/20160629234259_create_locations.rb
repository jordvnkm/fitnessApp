class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.decimal :NE_lat, precision: 10, null: false
      t.decimal :NE_lng, precision: 10, null: false
      t.decimal :SW_lat, precision: 10, null: false
      t.decimal :SW_lng, precision: 10, null: false

      t.timestamps;
    end
    add_index :locations, :name
  end
end
