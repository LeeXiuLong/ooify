class ChangeDateTime < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthdate
    add_column :users, :birthdate, :string
  end
end
