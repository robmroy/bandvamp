class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
    t.integer :band_id, null: false
    t.string :name, null: false
    t.text :description
      t.timestamps
    end
    add_index :albums, :band_id
    add_index :albums, :name
  end
end
