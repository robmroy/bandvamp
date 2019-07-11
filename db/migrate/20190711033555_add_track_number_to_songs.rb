class AddTrackNumberToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :track_number, :integer
  end
end
