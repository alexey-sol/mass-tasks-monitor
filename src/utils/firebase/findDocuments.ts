import { firestore } from "./firebase";

export default async (collectionName: string) => {
    const ref = firestore.collection(collectionName);
    const snapshot = await ref.get();
    return snapshot.docs.map(doc => doc.data());
};
