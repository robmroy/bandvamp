# == Schema Information
#
# Table name: songs
#
#  id           :bigint           not null, primary key
#  album_id     :integer
#  name         :string
#  duration     :integer
#  description  :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  track_number :integer
#

require 'test_helper'

class SongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
