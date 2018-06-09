json.array! @teams.each do |team|
  json.partial! team
end