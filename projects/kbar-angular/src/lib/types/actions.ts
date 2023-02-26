export type Actions = Action[];

export type Action = {
  id: string;
  name: string;
  keywords?: string[];
  section?: string | undefined | null;
  icon?: any | undefined | null;
  subtitle?: string | undefined | null;
  perform?: (event: Event) => void | undefined | null;
  closeOnSelect?: boolean | undefined | null;
  parent?: string | undefined | null;
};
