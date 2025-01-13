import _cloneDeep from 'lodash/cloneDeep';
import _areEqual from 'lodash/isEqualWith';

export function get(obj, key) {
  return key
    .split('.')
    .reduce((o, x) => (typeof o === 'undefined' || o === null ? o : o[x]), obj);
}

export function has(obj, key) {
  let o = obj;
  return key.split('.').every((x) => {
    if (typeof o !== 'object' || o === null || !o[x] || x === null) {
      return false;
    }
    o = obj[x];
    return true;
  });
}

export function onError(err) {
  console.error(err); // eslint-disable-line no-console
  throw err;
}

export function areEqual(prevProps, nextProps, customizer = []) {
  // The customizer can either be a function that returns whether a value is equal
  // Or an array of string that represent props to be omitted
  const isFunction = typeof customizer === 'function';
  return _areEqual(
    prevProps,
    nextProps,
    isFunction
      ? customizer
      : (value1, value2, key) => (customizer.includes(key) ? true : undefined)
  );
}

export function clone(object) {
  return _cloneDeep(object);
}

export function filterValues(values) {
  const newValues = {};
  for (const i in values) {
    if (typeof values[i] === 'string' && values[i] !== '') {
      newValues[i] = values[i];
    } else if (
      typeof values[i] === 'object' &&
      !areEqual(filterValues(values[i]), {})
    ) {
      newValues[i] = values[i];
    } else if (typeof values[i] === 'number') {
      newValues[i] = values[i];
    }
  }
  return newValues;
}

export function filterValuesWithData(values) {
  const newValues = {};
  for (const i in values) {
    if (typeof values[i] === 'string' && values[i] === '') {
      newValues[i] = null;
    } else if (
      typeof values[i] === 'object' &&
      areEqual(filterValues(values[i]), {})
    ) {
      newValues[i] = null;
    } else {
      newValues[i] = values[i];
    }
  }
  return newValues;
}

export function arrayToString(array) {
  let string = '';
  if (array) {
    for (const value of array) {
      string += string === '' ? value : `, ${value}`;
    }
  }
  return string;
}
