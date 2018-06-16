import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BrowseChannels extends React.Component {
  constructor(props) {
    super(props);
    this.handleEscKey = this.handleEscKey.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels(1)
    document.addEventListener('keydown', this.handleEscKey, true)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey, true)
  }

  handleEscKey(e) {
    if (e.key === "Escape") { this.props.closeModal() }
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

          <div className="browse-channels-search">
            <span className="browse-search-icon"><i className="far fa-search"></i></span>
            <input className="browse-search-input" type="search" placeholder="Search channels" />
          </div>

          <div className="all-channels">
            {/* list of unjoined channels */}
            <div className="joinable-channels">
              <div className="status-title">Channels you can join</div>
              <ul className="joinable-channel-index">
              {joinableChannels.map( channel => (
                <li 
                  key={channel.id}
                  className="browse-single-channel"
                  onClick={this.handleClick(channel.id)}
                >
                  {`# ${channel.name}`}
                </li>
              ))}
              </ul>
            </div>

            {/* list of joined channels */}
            <div className="joined-channels">
              <div className="status-title">Channels you belong to</div>
              <ul className="joined-channel-index">
                {joinedChannels.map( channel => (
                  <li
                    key={channel.id}
                    className="browse-single-channel"
                    onClick={closeModal}>
                    <Link to={`/channels/${channel.id}`} className="joined-link">
                      {`# ${channel.name}`}
                    </Link>
                  </li> 
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BrowseChannels);