# == Schema Information
#
# Table name: teams
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  img_url    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :channels, dependent: :destroy
  has_many :directs, dependent: :destroy

  has_many :team_memberships, dependent: :destroy
  has_many :team_members,
    through: :team_memberships,
    source: :user
end
