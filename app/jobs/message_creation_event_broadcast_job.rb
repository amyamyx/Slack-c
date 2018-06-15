class MessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    type = message.messageable_type
    id = message.messageable_id
    ActionCable.server.broadcast(
      "#{type}-#{id}",
      payload: ActiveSupport::JSON.decode(render_message(message))
    )
  end

  private

  def render_message(message)
    ApplicationController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
  end
end