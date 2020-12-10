import React from "react";

const WorkerLogin = () => {
  return (
    <div class="container">
      <div class="main">
        <h2>Login Form Validation</h2>
        <form id="form_id" method="post" name="myform">
          <label>User Name :</label>
          <input type="text" name="username" id="username" />
          <label>Password :</label>
          <input type="password" name="password" id="password" />
          <input type="button" value="Login" id="submit" onclick="validate()" />
        </form>
        <span>
          <b class="note">Note : </b>For this demo use following username and
          password. <br />
          <b class="valid">
            User Name : Formget
            <br />
            Password : formget#123
          </b>
        </span>
      </div>
    </div>
  );
};

export default WorkerLogin;
