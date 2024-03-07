import { Icons } from 'components/icons';
import {
  DASHBOARD_PAGE_PATH,
  LEADERBOARD_PAGE_PATH,
} from 'constants/routes-paths';

export const SIDEBAR_NAVIGATION = [
  { path: DASHBOARD_PAGE_PATH, Icon: Icons.home },
  { path: LEADERBOARD_PAGE_PATH, Icon: Icons.award },
];
