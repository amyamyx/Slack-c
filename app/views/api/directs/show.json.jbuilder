json.direct do
  json.extract! @direct, :id
  json.extract! @membership, :visible
end

if @direct.messages.empty?
  json.messages({})
else
  json.messages do 
    @direct.messages.each do |message|
      json.set! message.id do
        json.partial! 'api/messages/message', message: message
      end
    end
  end
end

json.direct_members do
  @direct.direct_members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username
    end
  end
end