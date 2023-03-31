import type { ReactElement } from 'react';

export type DashboardPanelProps = {
  imageUrl: string;
  title: string;
  header: string;
  cards: ReactElement[];
};
