import React, { Fragment } from "react";
import Link from "next/link";
import { useAuth } from "@/auth/components/UserContext";
import { Button } from "@/commons/components";

function UserNaviguation() {
  const [session, logout] = useAuth();
  console.log(logout);
  return (
    <nav>
      {session ? (
        <Button size="large" kind="primary" onClick={logout}>
          logout
        </Button>
      ) : (
        <Fragment>
          <Link href="/auth/signin">
            <a>Connexion</a>
          </Link>
          <Link href="/auth/signup">
            <a>Inscription</a>
          </Link>
        </Fragment>
      )}
    </nav>
  );
}

export default UserNaviguation;
