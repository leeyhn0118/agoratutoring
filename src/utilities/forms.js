export function checkErrors(errors) {
  let returnValue = true;

  for (const i in errors) {
    if (i !== 'res' && errors[i] !== null) {
      returnValue = false;
    }
  }

  return returnValue;
}

export function checkInputs(inputs, errors, setErrors, checks) {
  const newErrors = {};

  for (const i in checks) {
    const name = checks[i][0];
    const message = checks[i][1];
    const input = inputs[name];
    const error = errors[name];

    if (typeof input === 'string') {
      if (input === '' && error === null) {
        newErrors[name] = message;
      } else if (input !== '' && error === message) {
        newErrors[name] = null;
      }
    } else if (typeof input === 'object') {
      if (
        (input.length === 0 || Object.keys(input).length === 0) &&
        error === null
      ) {
        newErrors[name] = message;
      } else if (
        input.length !== 0 &&
        Object.keys(input).length !== 0 &&
        error === message
      ) {
        newErrors[name] = null;
      }
    }
  }

  setErrors((state) => ({ ...state, ...newErrors }));

  for (const i in errors) {
    if (i !== 'res' && errors[i] !== null) {
      return false;
    }
  }

  for (const i in newErrors) {
    if (i !== 'res' && newErrors[i] !== null) {
      return false;
    }
  }

  return true;
}

export const inputHandler = (setInput) =>
  async function setValue(event, name) {
    const { value } = event.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

export const inputAndErrorHandler = (setInput, setErrors, errors) =>
  async function setValue(event, name, validateFunc, optional = false) {
    const error = errors[name];
    const { value } = event.target;

    setInput((state) => ({ ...state, [name]: value }));

    const validateError = validateFunc ? await validateFunc(value) : false;

    if (
      optional &&
      (value === '' || (typeof value === 'object' && value.length === 0))
    ) {
      setErrors((state) => ({ ...state, [name]: null }));
    } else if (
      !optional &&
      (value === '' || (typeof value === 'object' && value.length === 0))
    ) {
      setErrors((state) => ({ ...state, [name]: 'This is a required field.' }));
    } else if (validateError) {
      setErrors((state) => ({ ...state, [name]: validateError }));
    } else if (typeof value === 'string') {
      if (value !== '' && error) {
        setErrors((state) => ({ ...state, [name]: null }));
      }
    } else if (typeof value === 'object') {
      if (value.length !== 0 && Object.keys(value).length !== 0 && error) {
        setErrors((state) => ({ ...state, [name]: null }));
      }
    }
  };

export const checkboxGroupHandler = (setInput, input) =>
  async function setCheckbox(event, field, value) {
    const { checked } = event.target;

    if (checked && !input[field].includes(value)) {
      setInput((state) => ({ ...state, [field]: [...state[field], value] }));
    } else if (!checked && input[field].includes(value)) {
      setInput((state) => {
        const newField = state[field].filter((element) => element !== value);
        return { ...state, [field]: newField };
      });
    }
  };

export function validateInput(value, error, setError, key, patterns) {
  let passed = true;

  if (value !== '') {
    for (const pattern of patterns) {
      if (!pattern[0].test(value)) {
        passed = false;
        setError({ ...error, [key]: pattern[1] });
        break;
      }
    }
  }

  if (passed === true && error[key] !== null) {
    setError({ ...error, [key]: null });
  }
}
