export interface Breadcrumb extends React.HTMLAttributes<HTMLAnchorElement> {
  index: number;
  link: string;
  text: string;
  width: number;
  onAction?: (item: Breadcrumb) => void;
}
