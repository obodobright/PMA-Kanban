export interface boardItemProps {
  title?: string;
  description?: string;
  id: number;
  subtask: subtaskProp[];
}

export interface subtaskProp {
  description: string;
  id?: number;
}
export interface boardProps {
  id: number;
  tag: string;
  tagColor: string;
  items?: boardItemProps[];
}

export interface modalProps {
  open: boolean;
  onClose: () => void;
}

export interface colorProp {
  id?: number;
  color?: string;
}
