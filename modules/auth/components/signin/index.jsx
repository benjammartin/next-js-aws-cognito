import React from "react";
import { Field, Button } from "@/commons/components";
import useForm from "@/commons/components/form/useForm";
import { createUser } from "services/auth";
import { useMutation, queryCache } from "react-query";
import Router from "next/router";

const stateSchema = {
  email: { value: "", error: "", required: true },
  password: { value: "", error: "", required: true },
};

function Signin() {
  const { handleOnChange, handleOnSubmit, disable, meta, setMeta } = useForm(
    stateSchema,
    onSubmitForm
  );

  const onSignin = ({ email, password }) => createUser.signin(email, password);

  const [mutate, { status, data, error }] = useMutation(onSignin, {
    onSuccess: () => {
      queryCache.refetchQueries("hassession").then(() => Router.push("/"));
    },
    onError: (e) => {
      setMeta({ message: e.message });
    },
  });

  function onSubmitForm(state) {
    mutate({ email: state.email.value, password: state.password.value });
  }
  return (
    <div>
      <h2>Signin component</h2>
      <form onSubmit={handleOnSubmit}>
        <Field
          onChange={handleOnChange}
          label="Email"
          type="text"
          name="email"
          placeholder="julie.martn@gmail.com"
        />
        <Field
          onChange={handleOnChange}
          label="Mot de passe"
          type="password"
          name="password"
          placeholder="+7 lettres"
        />
        <Button
          type="submit"
          onChange={handleOnChange}
          size="large"
          kind="primary"
          disabled={disable}
          loading={status === "loading"}
        >
          Submit
        </Button>
        <p>{meta && meta.message}</p>
      </form>
    </div>
  );
}

export default Signin;
