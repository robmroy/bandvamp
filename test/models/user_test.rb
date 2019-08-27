# == Schema Information
#
# Table name: users
#
#  id               :bigint           not null, primary key
#  username         :string           not null
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  band_name        :string
#  band_description :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  background_color :string
#  user_description :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
