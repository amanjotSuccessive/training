let  validate = (id) => {
    // userName userCity userAddress userAge userAgree userPassword

    switch (id) {
        case 'userName': {
            let username = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{3,15})$/;
            let error = username.test(event.target.value) ? null : "Illegal User Name";
            return error;
            break;
        }
        case 'userCity': {
            let city = /[A-Za-z]{3,20}/;
            let error = city.test(event.target.value) ? null : "Illegal City name";
            return error;
            break;
        }
        case 'userPassword': {
            let password = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
            let error = password.test(event.target.value) ? null : "Illegal Password";
            return error;
            break;
        }
        default:
            return console.log("validate function return nothing");
            break;
    }
      //Template.instance().low.set(error);
}

export default validate;