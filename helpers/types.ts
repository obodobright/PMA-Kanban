export interface boardItemProps {
  title?: string;
  description?: string;
}
export interface boardProps {
  id: number;
  tag: string;
  tagColor: string;
  total?: number;
  items?: boardItemProps[];
}
