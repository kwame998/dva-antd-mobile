import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';



const UserPage = (props) => {
  return(
    <div>
      my testaa
    </div>
  )
}

function mapStateToProps({ user,}) {
  return {
    ...user,
  };
}

export default connect(mapStateToProps)(UserPage);
