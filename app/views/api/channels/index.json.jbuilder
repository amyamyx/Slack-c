@channels.each do |channel|
  json.set! channel.id do
    json.partial! channel
  end
end