# == Schema Information
#
# Table name: purchases
#
#  id         :bigint           not null, primary key
#  album_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Purchase < ApplicationRecord

    validates :album_id, :user_id, presence: true
    belongs_to :purchased_album,
    foreign_key: :album_id,
    class_name: :Album
end
