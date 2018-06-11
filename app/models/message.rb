class Message < ApplicationRecord
  validates :content, presence: true
  after_create_commit do
    MessageCreationEventBroadcastJob.perform_later(self)
  end
  belongs_to :user
  belongs_to :messageable, polymorphic: true


end