@users.each do |user|
  json.set! user.id do
    json.partial! user
  end
end
