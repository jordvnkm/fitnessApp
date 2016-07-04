class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.text :content, null: false
      t.integer :route_id, null: false
    end

    add_index :comments, :author_id
    add_index :comments, :route_id
  end
end
