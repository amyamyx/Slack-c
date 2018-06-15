# json.array! @direct_memberships each do |membership|
#   json.extract! membership, :id, :direct_id, :user_id, :visible
# end


@direct_memberships.each do |membership|
  json.set! membership.id do
    json.extract! membership, :id, :direct_id, :user_id
  end
end
