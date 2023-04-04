import type { ReactElement } from 'react';

export type DashboardPanelProps = {
  title: string;
  header: string;
  headerButton: ReactElement;
  cards: ReactElement;
};
