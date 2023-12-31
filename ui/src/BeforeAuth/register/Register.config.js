export const regInputControls=[
    {
        lbl:'User Name',
        type:'text',
        tag:'input',
        name:'uid',
        errorMsg:'',
        isShowError:false,
        value:''
    },
    {
        lbl:'Password',
        type:'password',
        tag:'input',
        name:'password',
        errorMsg:'',
        isShowError:false,
        value:''
    },
    {
        lbl:'Phone',
        type:'number',
        tag:'input',
        name:'phone',
        errorMsg:'',
        isShowError:false,
        value:''
    },
    {
        lbl:'Gender',
        type:'radio',
        tag:'input',
        name:'gen',
        errorMsg:'',
        isShowError:false,
        options:['Male','Female'],
        values:['M','F'],
        value:''
    },
    {
        lbl:'Hobbies',
        type:'checkbox',
        tag:'input',
        name:'hobbies',
        errorMsg:'',
        isShowError:false,
        options:['Cricket','FootBall','Hockey'],
        values:['cric','fb','hoc'],
        value:''
    },
    {
        lbl:'Country',
        tag:'select',
        name:'country',
        errorMsg:'',
        isShowError:false,
        options:['India','Pakistan','China'],
        values:['ind','pak','chi'],
        value:''
    },
    {
        lbl:'Address',
        tag:'textarea',
        name:'address',
        errorMsg:'',
        isShowError:false,
        options:['India','Pakistan','China'],
        values:['ind','pak','chi'],
        value:''
    }
]