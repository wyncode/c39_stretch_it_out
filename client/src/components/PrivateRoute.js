import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import swal from 'sweetalert';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = sessionStorage.getItem('user');
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Redirect to="/" /> : <Component {...routeProps} />
      }
    />
  );
};
export default PrivateRoute;
