import { Location, Update } from 'history';

export interface MarketingOptions {
  onNavigate: (location: Location) => void;
}

export interface MountReturn {
  onParentNavigate: (update: Update) => void;
}
