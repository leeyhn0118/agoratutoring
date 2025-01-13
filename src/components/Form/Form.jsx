import React from 'react';
import propTypes from 'prop-types';

import * as S from './Form.style';

const Form = ({ columns, template, onSubmit, className, children }) => (
  <S.Form
    noValidate
    $columns={columns}
    $template={template}
    onSubmit={onSubmit}
    className={className}
  >
    {children}
  </S.Form>
);

Form.defaultProps = {
  className: undefined,
};

Form.propTypes = {
  columns: propTypes.number.isRequired,
  template: propTypes.arrayOf(propTypes.string).isRequired,
  onSubmit: propTypes.func.isRequired,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};

export default Form;
