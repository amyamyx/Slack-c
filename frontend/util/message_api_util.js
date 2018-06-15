export const createChannelMessage = (channelId, message) => (
  $.ajax({
    type: 'POST',
    url: `api/channels/${channelId}/messages`,
    data: { message }
  })
)

export const createDirectMessage = (directId, message) => (
  $.ajax({
    type: 'POST',
    url: `api/directs/${directId}/messages`,
    data: { message }
  })
)