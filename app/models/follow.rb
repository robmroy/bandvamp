# == Schema Information
#
# Table name: follows
#
#  id         :bigint           not null, primary key
#  fan_id     :integer          not null
#  band_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ApplicationRecord

    validates :fan_id, :band_id, presence: true

    belongs_to :followed_band,
    class_name: :User,
    foreign_key: :band_id
end
