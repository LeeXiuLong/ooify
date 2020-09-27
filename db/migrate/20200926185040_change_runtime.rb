class ChangeRuntime < ActiveRecord::Migration[5.2]
  def change

    remove_column :songs, :runtime
    add_column :songs, :runtime, :string
  end
end
