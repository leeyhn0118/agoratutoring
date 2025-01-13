function toBottom(component) {
  component.scrollTop = component.scrollHeight; // eslint-disable-line no-param-reassign
}

function toTop(component) {
  component.scrollTop = 0; // eslint-disable-line no-param-reassign
}

export default {
  toBottom,
  toTop,
};
