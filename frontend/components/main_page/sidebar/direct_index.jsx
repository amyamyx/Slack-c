import React from 'react';
import DirectIndexItem from './direct_index_item';

class DirectIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchDirects(this.props.teamId);
  }

  render() {
    return (
      <div className="direct-index">
        <h4 className="sidebar-title">Direct Messages </h4>

        {this.props.directs.map(direct => (
          <DirectIndexItem key={direct.id} directId={direct.id}/>
        ))}

      </div>
    )
  }
}

export default DirectIndex;