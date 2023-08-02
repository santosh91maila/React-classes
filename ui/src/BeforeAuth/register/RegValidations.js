export const fnRegValidations=(value,_inputControl)=>{
    _inputControl.isShowError=false;
    _inputControl.value=value;
    _inputControl.errorMsg=''
    if(_inputControl.name=='uid'){
        if(!_inputControl.value){
             _inputControl.isShowError=true
            _inputControl.errorMsg="Enter User id"
        }else{
            let regExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regExp.test(value)){
                _inputControl.errorMsg="User id should be in the email format"
                _inputControl.isShowError=true
            }
        }
    }

    if(_inputControl.name=='password'){
        if(!_inputControl.value){
            _inputControl.errorMsg="Enter Password"
            _inputControl.isShowError=true
        }else{
            if(_inputControl.value.length<5){
                _inputControl.errorMsg="Password should contains minimum 5 chars"
                _inputControl.isShowError=true
            }
        }
    }
    if(_inputControl.name=='phone'){
        if(!_inputControl.value){
            _inputControl.errorMsg="Enter Phone number"
            _inputControl.isShowError=true
        }else{
            let regExp=/^([0-9]{10}$)/
            if(!regExp.test(value)){
                _inputControl.errorMsg="Phone no should contains 10 digits only"
                _inputControl.isShowError=true
            }
        }
    }
    if(_inputControl.name=='gen'){
        if(!_inputControl.value){
            _inputControl.errorMsg="Please select gender"
            _inputControl.isShowError=true
        }
    }
    if(_inputControl.name=='hobbies'){
        if(!_inputControl.value){
            _inputControl.errorMsg="Please select hobbies"
            _inputControl.isShowError=true
        }
    }
    if(_inputControl.name=='country'){
        if(!_inputControl.value){
            _inputControl.errorMsg="Please select country"
            _inputControl.isShowError=true
        }
    }
    if(_inputControl.name=='address'){
        if(!_inputControl.value){
            _inputControl.errorMsg="Please select address"
            _inputControl.isShowError=true
        }
    }
};