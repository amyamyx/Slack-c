json.extract! message, :id, :user_id, :content
json.created_at message.created_at.strftime('%l:%M %p')
