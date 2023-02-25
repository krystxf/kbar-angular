export type Action = {
  name: string;
  keywords?: string[];
  perform: () => void;
  onClickClose?: boolean | undefined | null;
  icon?: any | undefined | null;
  group?: string | undefined | null;
};
