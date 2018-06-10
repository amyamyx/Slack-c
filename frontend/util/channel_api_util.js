export const getChannels = teamId => (
  $.ajax({
    type: 'GET',
    url: `api/teams/${teamId}/channels`
  })
)

export const getChannel = channelId => (
  $.ajax({
    type: 'GET',
    url: `api/channels/${channelId}`
  })
)

export const updateChannel = channel => (
  $.ajax({
    type: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: { channel }
  })
)

export const createChannel = (teamId, channel) => (
  $.ajax({
    type: 'POST',
    url: `api/teams/${teamId}/channels`,
    data: { channel }
  })
)

export const deleteChannel = channelId => (
  $.ajax({
    type: 'DELETE',
    url: `api/channels/${channelId}`,
  })
)