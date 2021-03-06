# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  team_id    :integer          not null
#  public     :boolean          default(TRUE), not null
#  purpose    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :name, :creator_id, :public, presence: true
  validates :name, uniqueness: { scope: :team_id, mesasge: "Channel already exists." }
  validates :public, inclusion: { in: [true, false] }

  after_save :ensure_membership
  
  belongs_to :team
  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
  
  
  has_many :messages, as: :messageable
  has_many :channel_memberships, dependent: :destroy
  has_many :channel_members,
    through: :channel_memberships,
    source: :user

  def ensure_membership
    ChannelMembership.create(
      channel_id: self.id,
      user_id: self.creator_id
    )
  end

end
