class AddUserDescriptionToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :user_description, :string
  end
end
