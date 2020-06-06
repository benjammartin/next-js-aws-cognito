export const Create = function (obj) {
  const element = Object.create(elementFunc);
  element.variants = obj;
  return element;
};

const elementFunc = {
  get: function (props) {
    let properties = [];
    for (let value in props) {
      if (this.variants.hasOwnProperty([value])) {
        properties.push(
          this.variants[value][props[value]]
        );
      }
    }
    return properties;
  }
};