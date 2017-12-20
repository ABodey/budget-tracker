import React from 'react';

export default ({ submit, action, allowName = false }) => (
  <form onSubmit={e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = {};
    if (allowName) data.name = elements.name.value;
    data.email = elements.email.value;
    data.password = elements.password.value;
    console.log(data);
    submit(data);
  }}>
    {allowName && <label>name: <input name="name" /></label>}
    <label>email: <input name="email" /></label>
    <label>password: <input type="password" name="password" /></label>
    <button>{action}</button>
  </form>
);

