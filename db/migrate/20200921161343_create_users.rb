class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false, unique: true
      t.datetime :birthdate, null:false
      t.string :gender, null: false
      t.string :session_token, null: false, unique: true
      t.timestamps
    end

  end
end
