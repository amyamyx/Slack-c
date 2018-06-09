json.array! @direct_memberships each do |membership|
  json.extract! membership, :id, :direct_id, :user_id
end
