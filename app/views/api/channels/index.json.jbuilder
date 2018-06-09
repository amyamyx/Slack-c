json.array! @channels.each do |channel|
  json.partial! channel
end