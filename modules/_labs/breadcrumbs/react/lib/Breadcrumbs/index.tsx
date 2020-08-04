import {CurrentCrumb} from './List/CurrentCrumb';
import {LinkedCrumb} from './List/LinkedCrumb';
import {BreadcrumbsNav} from './Nav';
import {CollapsibleList} from './List/Collapsible';
import {BreadcrumbsListItem} from './List/ListItem';
import {BreadcrumbsList} from './List';

export const Breadcrumbs = {
  Nav: BreadcrumbsNav,
  CollapsibleList,
  List: BreadcrumbsList,
  ListItem: BreadcrumbsListItem,
  LinkedCrumb,
  CurrentCrumb,
};
