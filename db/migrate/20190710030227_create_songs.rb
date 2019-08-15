class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :album_id
      t.string :name
      t.integer :duration
      t.string :description
      t.integer :track_number
      t.timestamps
    end
    add_index :songs, :album_id
    add_index :songs, :name
  end
end
