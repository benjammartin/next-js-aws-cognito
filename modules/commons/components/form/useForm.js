import {
  useState,
  useEffect,
  useCallback
} from 'react';


function useForm(stateSchema, callback) {
  const [state, setState] = useState(stateSchema);
  const [meta, setMeta] = useState(null)
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setDisable(true)
  }, [])


  useEffect(() => {
    isDirty && setDisable(validateState())
  }, [state, isDirty])

  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(stateSchema).some(key => {
      const isInputFieldRequired = stateSchema[key].required;
      const stateValue = state[key].value; // state value
      const stateError = state[key].error; // state error

      return (isInputFieldRequired && !stateValue) || stateError;
    });

    return hasErrorInState;
  }, [state, stateSchema]);


  const handleOnChange = useCallback(
    event => {
      setIsDirty(true);
      setMeta(null);

      const name = event.target.name;
      const value = event.target.value;

      let error = '';
      if (stateSchema[name].required) {
        if (!value) {
          error = 'This is required field.';
        }
      }

      if (
        stateSchema[name].validator !== null &&
        typeof stateSchema[name].validator === 'object'
      ) {
        if (value && !stateSchema[name].validator.regEx.test(value)) {
          error = stateSchema[name].validator.error;
        }
      }

      setState(prevState => ({
        ...prevState,
        [name]: {
          value,
          error
        },
      }));
    },
    [stateSchema]
  );
  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();
      if (!validateState()) {
        callback(state, setMeta);
      }
    },
    [state]
  );
  return {
    state,
    disable,
    handleOnChange,
    handleOnSubmit,
    meta,
    setState,
    setMeta
  };
}

export default useForm;