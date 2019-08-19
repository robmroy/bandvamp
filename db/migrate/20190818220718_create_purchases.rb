class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.integer :album_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index(:purchases, [:user_id, :album_id])
  end
end
