import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [targetArea, setTargetArea] = useState(null);
  const [stretchNames, setStretchNames] = useState([]);
  const user = sessionStorage.getItem('user');

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/users/me`, {
          withCredentials: true
        })
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((error) => swal('oops!', error.toString()));
    }
  }, [currentUser, user, setCurrentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        setLoading,
        targetArea,
        setTargetArea,
        stretchNames,
        setStretchNames
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
