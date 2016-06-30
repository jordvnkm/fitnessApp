class CreateCompletedRoutes < ActiveRecord::Migration
  def change
    create_table :completed_routes do |t|
      t.integer :route_id, null: false
      t.integer :user_id, null: false
      t.date :date, null: false
      t.text :notes

      t.timestamps
    end
    add_index :completed_routes, :route_id
    add_index :completed_routes, :user_id
    add_index :completed_routes, :date
  end
end
