json.array! @channel_memberships each do |membership|
  json.extract! membership, :id, :channel_id, :user_id
end
