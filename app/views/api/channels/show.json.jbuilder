json.channel do
  json.partial! @channel
end

json.channelMessages do 
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :user_id, :content, :created_at
    end
  end
end