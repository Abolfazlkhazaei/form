export const validate = (data,type)=>{
    const errors = {};
    

    if(!data.email.trim()){
        errors.email = "Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email address is invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password = "Password is required"
    }else if(data.password.length < 6){
        errors.password = "Password need to 6 Character or more"
    }else {
        delete errors.password
    }

   

    if(type === "singup"){
        if(!data.name.trim()){
            errors.name = "Username required"
        }else{
            delete errors.name
        }

        if(!data.confrimpassword){
            errors.confrimpassword = "Confrim the password"
        }else if(data.confrimpassword !== data.password){
            errors.confrimpassword = "Password is not match"
        }else {
            delete errors.confrimpassword
        }
    
        if(data.isAccept){
            delete errors.isAccept
        }else{
            errors.isAccept = "Accept our regulations"
        }
    }

    return errors
}