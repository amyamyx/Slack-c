json.array! @messages.each do |message|
  json.extract! message, :id, :user_id, :content, :created_at
end