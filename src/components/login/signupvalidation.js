function validation(data){
    let error = {}
    const email_pattern =/^[^\s@]+@[^\s@]+[^\s@]+$/
    // const password_pattern= /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
    if(data.email === "")
    {
        error.email="emailshouldnt be empty"
    }
    else if (!email_pattern.test(data.email)){
        error.email ="email didnt match"
        
    }
    else{
        error.email=""

    }
    if(data.username === "")
    {
        error.username="username shouldnt be empty"
    }
    else{
        error.username=""

    }
    if(data.password === "")
    {
        error.username="password shouldnt be empty"
    }
    // else if (!password_pattern.test(data.password)){
    //     error.password ="password didnt match"
        
    // }
    else{
        error.username=""

    }
    return error



}
export default validation