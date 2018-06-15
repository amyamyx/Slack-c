export const createChannelMembership = (channelId, userId) => (
  $.ajax({
    type: 'POST',
    url: `api/channels/${channelId}/channel_memberships`,
    data: { channel_membership: {channel_id: channelId, user_id: userId }}
  })
)

export const fetchDirectMemberships = directId => (
  $.ajax({
    type: 'GET',
    url: `api/directs/${directId}/direct_memberships`
  })
)

export const fetchUserDirectMemberships = teamId => (
  $.ajax({
    type: 'GET',
    url: `api/teams/${teamId}/direct_memberships`
  })
)

// export const createDirectMembership