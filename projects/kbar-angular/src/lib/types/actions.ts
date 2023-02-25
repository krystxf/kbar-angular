export type Action = {
  name: string;
  perform: (event: MouseEvent) => void;
  keywords?: string[];
  onClickClose?: boolean | undefined | null;
  icon?: any | undefined | null;
  group?: string | undefined | null;
};
