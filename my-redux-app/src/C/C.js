import React    from "react";
import template from "./C.jsx";
import {connect} from 'react-redux'
class C extends React.Component {
  render() {
    return template.call(this);
  }
}
const mapStateToProps=(state)=>{
  return {
     n:state.appReducer.name
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
     dispatch
  }
}
C=connect(mapStateToProps,mapDispatchToProps)(C)

export default C;
