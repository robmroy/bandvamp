class AddBackgroundColorToUsers < ActiveRecord::Migration[5.2]
  def change
    
    add_column :users, :background_color, :string
    
  end
end
