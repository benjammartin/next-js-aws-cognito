import React from "react";
import { Field, Button } from "@/commons/components";
import useForm from "@/commons/components/form/useForm";
import { Half } from "@/commons/components/form/field/layout";
import { createUser } from "services/auth";
import Router from "next/router";

const stateSchema = {
  lastname: { value: "", error: "", required: true },
  firstname: { value: "", error: "", required: true },
  email: { value: "", error: "", required: true },
  password: { value: "", error: "", required: true }
};

async function onSubmitForm(state, setMeta) {
  try {
    let res = await createUser.signup(
      state.firstname.value,
      state.lastname.value,
      state.email.value,
      state.password.value
    );
    Router.push({
      pathname: "/auth/confirmation",
      query: { email: res.getUsername() }
    });
  } catch (e) {
    setMeta({ message: e.message });
  }
}

function Signup() {
  const {
    state,
    handleOnChange,
    handleOnSubmit,
    disable,
    meta,
    setMeta
  } = useForm(stateSchema, onSubmitForm);

  return (
    <div>
      <h2>Signup component</h2>
      <form onSubmit={handleOnSubmit}>
        <Half>
          <Field
            onChange={handleOnChange}
            label="Nom"
            name="lastname"
            type="text"
            placeholder="Julie"
          />
          <Field
            onChange={handleOnChange}
            label="Prénom"
            name="firstname"
            type="text"
            placeholder="Martin"
          />
        </Half>
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
        >
          Submit
        </Button>
        <p>{meta && meta.message}</p>
      </form>
    </div>
  );
}

export default Signup;
