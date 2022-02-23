import _, { camelCase } from "lodash";

export const convertToCamel = (data: any): any => {
  if (_.isArray(data)) {
    return _.map(data, convertToCamel);
  }

  if (_.isObject(data)) {
    return _(data)
      .mapKeys((_, k) => camelCase(k))
      .mapValues((v, _) => convertToCamel(v))
      .value();
  }

  return data;
};
