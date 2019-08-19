class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :fan_id, null: false
      t.integer :band_id, null: false
      t.timestamps
    end
    add_index(:follows, [:fan_id, :band_id])
  end
end
