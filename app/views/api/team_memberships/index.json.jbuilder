json.array! @team_memberships each do |membership|
  json.extract! membership, :id, :team_id, :user_id
end
