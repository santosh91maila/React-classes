import React    from "react";
import template from "./A.jsx";
import { appStore } from "../store.js";

class A extends React.Component {
  nameRef=React.createRef()
  fnClick=()=>{
   let name=this.nameRef.current.value ;
   appStore.dispatch({
       type:'NAME_CHANGE',
       payload:name
   })
  }
  render() {
    return template.call(this);
  }
}



export default A;
