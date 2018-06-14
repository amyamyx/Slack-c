export const createChannelMembership = (channelId, userId) => (
  $.ajax({
    method: 'POST',
    url: `api/channels/${channelId}/channel_memberships`,
    data: { channel_membership: {channel_id: channelId, user_id: userId }}
  })
)
