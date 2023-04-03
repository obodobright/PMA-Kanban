export interface boardItemProps {
  title?: string;
  description?: string;
  id: number;
}
export interface boardProps {
  id: number;
  tag: string;
  tagColor: string;
  total?: number;
  items?: boardItemProps[];
}
