export type Actions = Action[];

export type Action = {
  name: string;
  perform: (event: MouseEvent) => void;
  keywords?: string[];
  closeOnSelect?: boolean | undefined | null;
  icon?: any | undefined | null;
  group?: string | undefined | null;
};
