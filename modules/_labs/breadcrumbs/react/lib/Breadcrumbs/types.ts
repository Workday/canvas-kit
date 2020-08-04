export interface Breadcrumb {
  index: number;
  link: string;
  text: string;
  width: number;
  onAction?: (item: Breadcrumb) => void;
}
