class Purchase < ApplicationRecord

    validates :album_id, :user_id, presence: true
    belongs_to: :purchased_album,
    foreign_key: :album_id,
    class_name: :Album
end
