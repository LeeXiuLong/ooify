class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.integer :artist_id, null: false
      t.integer :release_year, null: false
      t.string :label, null: false
      t.timestamps
    end
    remove_column :artists, :image_url
    add_index :albums, :name
    add_index :albums, :artist_id
  end
end
