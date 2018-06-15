json.channel do
  json.partial! @channel
end

if @channel.messages.empty?
  json.messages({})
else
  json.messages do 
    @channel.messages.each do |message|
      json.set! message.id do
        json.partial! 'api/messages/message', message: message
      end
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