@directs.each do |direct|
  json.set! direct.id do
    json.extract! direct, :id
  end
end
