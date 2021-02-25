import {CurrentItem} from './List/CurrentItem';
import {BreadcrumbLink} from './List/Link';
import {BreadcrumbsNav} from './Nav';
import {CollapsibleList} from './List/Collapsible';
import {BreadcrumbsListItem} from './List/ListItem';
import {BreadcrumbsList} from './List';

export const Breadcrumbs = {
  Nav: BreadcrumbsNav,
  CollapsibleList,
  List: BreadcrumbsList,
  ListItem: BreadcrumbsListItem,
  Link: BreadcrumbLink,
  CurrentItem,
};
