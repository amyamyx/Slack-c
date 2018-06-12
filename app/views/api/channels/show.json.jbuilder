json.channel do
  json.partial! @channel
  json.extract! @channel, :creator_id
end

json.messages do 
  @channel.messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end

json.channel_members do
  @channel.channel_members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username
    end
  end
end