class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text :profile_img_url, null: false, default: "https://www.b1g1.com/assets/admin/images/no_image_user.png"
    end
  end
end
