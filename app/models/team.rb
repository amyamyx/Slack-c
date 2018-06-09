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
  after_save :ensure_membership, :create_general_channel
  
  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

  has_many :channels, dependent: :destroy
  has_many :directs, dependent: :destroy

  has_many :team_memberships, dependent: :destroy
  has_many :team_members,
    through: :team_memberships,
    source: :user
  
  def ensure_membership
    TeamMembership.create(
      team_id: self.id,
      user_id: creator.id
    )
  end

  def create_general_channel
    Channel.create(
          name: "general",
          creator_id: self.creator_id,
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
