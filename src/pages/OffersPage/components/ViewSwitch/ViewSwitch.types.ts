import { Dispatch, SetStateAction } from 'react';

export enum OffersPageView {
  List,
  Map,
}

export interface IViewSwitchProps {
  view: OffersPageView;
  setView: Dispatch<SetStateAction<OffersPageView>>;
}
