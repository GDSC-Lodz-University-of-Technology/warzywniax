import { GeoPoint } from 'firebase/firestore';

export interface LocationRecord {
  geoPoint: GeoPoint;
  description?: string;
  photoUrl?: string;
}
