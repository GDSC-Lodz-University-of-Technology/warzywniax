import { z } from 'zod';
import { ZGeoPoint } from '../../../common/utils/zod.utils';

export const LocationRecord = z.object({
  description: z.string().optional(),
  geoPoint: ZGeoPoint,
  photoUrl: z.string().optional(),
});
export type LocationRecord = z.infer<typeof LocationRecord>;
