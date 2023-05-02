//add function here
  function formtName(user){
    return "first name is "+ user.firstName + ' '+ user.address + " "+ user.lastName;
  }

  const user= {
    firstName:"West",
    lastNameL: "Cliff",
   
  };

  const element = <h1>Hello, {formatName(user)}!</h1>;
  
  ReactDOM.render(element, document.getElementById('root'));