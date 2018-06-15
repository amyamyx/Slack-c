import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BrowseChannels extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels(1)
  }

  filterChannels(allChannels){
    const { joinedChannels } = this.props;
    const filtered = new Array();
    const joinedIds = joinedChannels.map( channel => (channel.id) )

    allChannels.forEach( channel=> {
      if (!joinedIds.includes(channel.id)) {
        filtered.push(channel)
      }
    })

    return filtered;
  }

  handleClick(channelId) {
    const { history, currentUser, createChannelMembership, closeModal,fetchJoinedChannels } = this.props;
    return (e) => {
      createChannelMembership(channelId, currentUser.id)
        .then(() =>{ 
          history.push(`/channels/${channelId}`)
          fetchJoinedChannels(1, currentUser.id)
          closeModal();
        })
    }
  }

  render() {
    const { channels, joinedChannels, closeModal } = this.props;
    const joinableChannels = this.filterChannels(channels);

    return (
      <div className="browse-channels">
        {/* close button */}
        <button className="esc-btn" onClick={closeModal}>
          <span className="x"><i className="fal fa-times"></i></span>
          <br />
          <span>esc</span>
        </button>

        <div className="browse-channels-content">
          {/* title */}
          <div className="browse-channels-title">
            <h1>Browse channels</h1>
            <Link to="/newChannel" className="create-link"><button onClick={closeModal} className="create-btn">Create Channel</button></Link>
          </div>

          {/* list of unjoined channels */}
          <div className="joinable-channels">
            <h3>Channels you can join</h3>
            <ul className="joinable-channel-index">
            {joinableChannels.map( channel => (
              <li 
                key={channel.id}
                className="joinable-channel"
                onClick={this.handleClick(channel.id)}
              >
                {`# ${channel.name}`}
              </li>
            ))}
            </ul>
          </div>

          {/* list of joined channels */}
          <div className="joined-channels">
            <h3>Channels you belong to</h3>
            <ul className="joined-channel-index">
              {joinedChannels.map( channel => (
                <li
                  key={channel.id}
                  className="joined-channel"
                  onClick={closeModal}>
                  <Link to={`/channels/${channel.id}`}>
                    {`# ${channel.name}`}
                  </Link>
                </li> 
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BrowseChannels);