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
  
  def ensure_membership(user)
    TeamMembership.create(
      team_id: self.id,
      user_id: user.id
    )
  end

  def create_general_channel(user)
    Channel.create(
          name: "general",
          creator_id: user.id,
          team_id: self.id,
          public: true,
          purpose: "This channel is for team-wide communication and announcements. All team members are in this channel."
    )
  end

  # !!Not thread-safe!!
  # after_save :create_general_channel, :ensure_membership
  # def ensure_membership
  #   TeamMembership.create(
  #     team_id: self.id,
  #     user_id: User.current.id
  #   )
  # end

  # def create_general_channel
  #   Channel.create(
  #         name: "general",
  #         creator_id: User.current.id,
  #         team_id: self.id,
  #         public: true,
  #         purpose: "This channel is for team-wide communication and announcements. All team members are in this channel."
  #   )
  # end
end
