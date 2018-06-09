json.array! @directs.each do |direct|
  json.extract! direct, :id
end