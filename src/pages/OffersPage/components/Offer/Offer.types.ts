import { OfferRecord } from '../../../../services/FirebaseService/OffersCollection/OffersCollection.types';
import { QueryDocumentSnapshot } from 'firebase/firestore';

export interface IOfferProps {
  data: QueryDocumentSnapshot<OfferRecord>;
}
