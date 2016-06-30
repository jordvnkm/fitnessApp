class CreateWaypoints < ActiveRecord::Migration
  def change
    create_table :waypoints do |t|
      t.decimal :lat, precision: 10, scale: 6, null: false
      t.decimal :lng, precision: 10, scale: 6, null: false
      t.integer :route_id, null: false
      t.integer :order, null: false

      t.timestamps
    end

    add_index :waypoints, :route_id
  end
end
