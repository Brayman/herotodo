function SignIn() {
    return (
      <div className="SignIn">
        login
        <input name='login' type='text'/>
        email
        <input name='mail' type='email'/>
        password
        <input name='password' type='password'/>
        Repeat password
        <input name='secondpassword' type='password'/>
        <button>Sign in</button>
      </div>
    );
  }
  
  export default SignIn;
  