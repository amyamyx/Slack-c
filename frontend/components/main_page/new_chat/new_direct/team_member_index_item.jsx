import React from 'react';

const DirectIndexItem = (props) => {
  return (
    <div>
      <Link to={`directs/${direct.id}`}>{direct.id}</Link>
    </div>
  )
}