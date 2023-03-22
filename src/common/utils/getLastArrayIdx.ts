import { isEmptyArray } from './isEmptyArray';

export function getLastArrayIdx(arr: unknown[]): number | undefined {
  if (isEmptyArray(arr)) {
    return undefined;
  }
  return arr.length - 1;
}
