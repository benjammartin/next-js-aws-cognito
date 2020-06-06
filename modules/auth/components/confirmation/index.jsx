import React, { useEffect } from "react";
import { Field, Button } from "@/commons/components";
import useForm from "@/commons/components/form/useForm";
import { createUser } from "services/auth";
import Router from "next/router";
import { useRouter } from "next/router";

const stateSchema = {
  code: { value: "", error: "", required: true },
  email: { value: "", error: "", required: true },
};

async function onSubmitForm(state, setMeta) {
  try {
    await createUser.confirm(state.email.value, state.code.value);
    Router.push({
      pathname: "/auth/signin",
    });
  } catch (e) {
    setMeta({ message: e.message });
  }
}

function Confirmation(props) {
  const {
    state,
    handleOnChange,
    handleOnSubmit,
    disable,
    meta,
    setState,
    setMeta,
  } = useForm(stateSchema, onSubmitForm);

  const {
    query: { email },
  } = useRouter();

  useEffect(() => {
    setState({ ...state, email: { value: email } });
  }, [email]);

  async function resendCode() {
    try {
      let res = await createUser.resend(state.email.value);
      setMeta({
        message: `Nous vous avons envoyé un ${res.CodeDeliveryDetails.DeliveryMedium} à ${res.CodeDeliveryDetails.Destination}`,
      });
    } catch (e) {
      setMeta({ message: e.message });
    }
  }

  return (
    <div>
      <h2>Veuillez confirmer votre compte</h2>
      <Button type="button" onClick={resendCode} size="small" kind="secondary">
        Recevoir un nouveau code
      </Button>
      <form onSubmit={handleOnSubmit}>
        <Field
          onChange={handleOnChange}
          label="Code de verification"
          name="code"
          type="text"
          placeholder=""
        />
        <Button type="submit" size="large" kind="primary" disabled={disable}>
          Submit
        </Button>
        <p>{meta && meta.message}</p>
      </form>
    </div>
  );
}

export default Confirmation;
