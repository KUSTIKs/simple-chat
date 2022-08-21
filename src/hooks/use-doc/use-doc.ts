import {
  CollectionReference,
  DocumentReference,
  onSnapshot,
} from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

type UseDocumentParams<T> = {
  handler: () => T | Promise<T>;
  dependencies: (DocumentReference | CollectionReference)[];
};

export const useDoc = <T>({ handler, dependencies }: UseDocumentParams<T>) => {
  const [state, setState] = useState<T | null>(null);

  const handleUpdate = useCallback(async () => {
    const newState = await handler();
    setState(newState);
  }, [handler]);

  useEffect(() => {
    const unsubscriptions = dependencies.map((dependency) =>
      onSnapshot(dependency as DocumentReference, handleUpdate)
    );

    return () => {
      unsubscriptions.forEach((unsubscription) => unsubscription());
    };
  }, [dependencies, handleUpdate]);

  return state;
};
