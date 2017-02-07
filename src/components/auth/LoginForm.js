import React from 'react'

const LoginForm = ({errors, credentials, sendingRequest, loginUser, updateLoginForm}) => {

  return (
    <form onSubmit={() => loginUser(credentials.username, credentials.password)}>
      {errors &&
      <div>
        {errors.username && <p className="form__error form__error">Username is required</p>}
        {errors.password  && <p className="form__error form__error">Password is required</p>}
        {errors.network  && <p className="form__error form__error">{errors.network}</p>}
      </div>}
      <div className="form-group">
        <input type="text" id="username" placeholder="username" autoCorrect="off" autoCapitalize="off" spellCheck="false"
               className="form-control"
               value={credentials.username || ''}
               onChange={(evt) => updateLoginForm('username', evt.target.value)} />
          <label className="control-label">Username</label>
      </div>
      <div className="form-group">
        <input id="password" type="password" placeholder="••••••••••"
               className="form-control"
               value={credentials.password || ''}
               onChange={(evt) => updateLoginForm('password', evt.target.value)} />
        <label className="control-label">Password</label>
      </div>
      <div>
          {/*
            {auth.sendingRequest ? (
              <LoadingButton />
            ) : (
              <button className="form__submit-btn" type="submit">Login</button>
            )}
          */}
          <button className="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  )
}

export default LoginForm
