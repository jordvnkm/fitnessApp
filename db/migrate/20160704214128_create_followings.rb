class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :user_id, null: false
      t.integer :fan_id, null: false

      t.timestamps
    end
    add_index :followings, :user_id
    add_index :followings, :fan_id
  end
end
