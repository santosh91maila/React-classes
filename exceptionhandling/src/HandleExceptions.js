import React from "react"

class HandleExceptions extends React.Component{
    state={
        hasException:false,
        msg:''
    }
    static getDerivedStateFromError(errorInfo){
        return {
            hasException:true,
            msg:errorInfo.message
        }
    }
    componentDidCatch(errorInfo,errorStack){
        console.log("::::",errorInfo)
        console.log("::::",errorStack)
    }
    render(){
        return <div>
         {this.state.hasException ? <div>{this.state.msg}</div> : this.props.children}
        </div>
    }
}

export default HandleExceptions