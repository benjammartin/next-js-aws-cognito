import React, { createContext, useContext } from "react";
import { useQuery, useMutation, queryCache } from "react-query";
import { createUser } from "services/auth";
import Router from "next/router";

const User = createContext(null);

function AuthProvider({ children }) {
  async function Logout() {
    return await createUser.logout();
  }

  const [mutate, { status, data }] = useMutation(Logout, {
    onSuccess: () => {
      queryCache
        .refetchQueries("hassession")
        .then(() => Router.push("/auth/signin"));
    },
    onError: (e) => {
      console.log(e);
    },
  });

  console.log(data);

  async function hasSession() {
    return await createUser.hasSession();
  }
  const { data: session } = useQuery("hassession", hasSession);

  console.log(session);

  return (
    <User.Provider value={[session, () => mutate()]}>{children}</User.Provider>
  );
}

export const useAuth = () => useContext(User);
export default AuthProvider;
