export type Theme = {
  overlay?: ngStyleType;
  search?: ngStyleType;
  positioner?: ngStyleType;
  results?: ngStyleType;
};

type ngStyleType = { [klass: string]: any } | undefined | null;
