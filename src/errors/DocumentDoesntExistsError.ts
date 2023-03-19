export class DocumentDoesntExistsError extends Error {
  constructor(documentId: string, collectionName: string) {
    super(
      `Document with given ID: [${documentId}] doesn't exists in [${collectionName}] collection`
    );
  }
}
