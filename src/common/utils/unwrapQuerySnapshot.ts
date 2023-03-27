import { DocumentData } from '@firebase/firestore';
import { QuerySnapshot } from 'firebase/firestore';

export function unwrapQuerySnapshot<T extends DocumentData>(snapshot: QuerySnapshot<T>): T[] {
  return snapshot.docs.map((doc) => doc.data());
}
