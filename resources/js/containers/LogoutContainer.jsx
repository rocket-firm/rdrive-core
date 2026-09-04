import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUserAuth } from 'store/authorization';

const LogoutContainer = ({ user = { token: null }, logoutUserAuth: logout }) => {
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();
    if (await logout(user && user.token)) {
      navigate('/login/', { replace: true });
    }
  };

  return (
    <a href="/admin/login/" onClick={handleLogout}>Logout</a>
  );
};

export default connect(
  ({ user }) => ({ user }),
  { logoutUserAuth },
)(LogoutContainer);
