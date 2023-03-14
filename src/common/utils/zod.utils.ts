import { DocumentReference, GeoPoint } from 'firebase/firestore';
import { z } from 'zod';

export const ZGeoPoint = z.custom<GeoPoint>((data) => data instanceof GeoPoint);
export const ZDocumentReference = z.custom<DocumentReference>(
  (data) => data instanceof DocumentReference
);
