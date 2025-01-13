import { isPossiblePhoneNumber } from 'libphonenumber-js';

export const isName = (name) => (value) => {
  if (value) {
    if (!/^[a-zA-Z '-]*$/.test(value)) {
      return `${name} must only contain letters, spaces, apostrophes and dashes.`;
    }
    if (value.length < 1 || value.length > 40) {
      return `${name} must be between 1 and 40 characters.`;
    }
  }
  return true;
};

export const isUsername = (name) => (value) => {
  if (value) {
    if (value.length < 4 || value.length > 24) {
      return `${name} must be between 4 and 24 characters.`;
    }
    if (!/^(?![_.-])/.test(value)) {
      return `${name} must not begin with an underscore, dash or period`;
    }
    if (!/^[a-zA-Z0-9._-]+$/.test(value)) {
      return `${name} must contain only letters, underscores, dashes or periods`;
    }
    if (!/(?<![_.-])$/.test(value)) {
      return `${name} must not end with an underscore, dash or period`;
    }
  }
  return true;
};

export const isEmailAddress = (name) => (value) => {
  if (value) {
    if (
      !/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,6})$/.test(value)
    ) {
      return `${name} must be valid.`;
    }
  }
  return true;
};

export const isPassword = (name) => (value) => {
  if (value) {
    if (value.length < 8) {
      return `${name} must have at least 8 characters.`;
    }
    if (!/(?=.*[a-z])/.test(value)) {
      return `${name} must have at least one lowercase letter.`;
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return `${name} must have at least one uppercase letter.`;
    }
    if (!/(?=.*[0-9])/.test(value)) {
      return `${name} must have at least one number.`;
    }
  }
  return true;
};

export const isPhoneNumber = (name) => (value) => {
  if (value) {
    if (!isPossiblePhoneNumber(value)) {
      return `${name} must be valid.`;
    }
  }
  return true;
};

export const isCourse = (name) => (value) => {
  if (value) {
    if (value.length < 1 || value.length > 20) {
      return `${name} must be between 1 and 20 characters.`;
    }
    if (!/^[a-zA-Z0-9 \-.]+$/.test(value)) {
      return `${name} must only contain letters, numbers, dashes and periods.`;
    }
  }
  return true;
};

export const isDescription = (name) => (value) => {
  if (value) {
    if (value.length < 1 || value.length > 1000) {
      return `${name} must be between 1 and 1000 characters.`;
    }
  }
  return true;
};

export const isEducationDescription = (name) => (value) => {
  if (value) {
    if (value.length < 1 || value.length > 80) {
      return `${name} must be between 1 and 80 characters.`;
    }
  }
  return true;
};

export const isTitle = (name) => (value) => {
  if (value) {
    if (value.length < 1 || value.length > 80) {
      return `${name} must be between 1 and 80 characters.`;
    }
  }
  return true;
};

export const isRate = (name) => (value) => {
  if (value) {
    if (value < 0 || value > 100000) {
      return `${name} must be between $0.00 and $1000.00`;
    }
  }
  return true;
};

export const areCourses = (name) => (values) => {
  if (values) {
    for (const value of values) {
      if (value.length < 1 || value.length > 20) {
        return `${name} must be between 1 and 20 characters.`;
      }
      if (!/^[a-zA-Z0-9 \-.]+$/.test(value)) {
        return `${name} must only contain letters, numbers, spaces, dashes and periods.`;
      }
    }
  }
  return true;
};
