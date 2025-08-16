import { db } from "../firebase.ts";
import { collection, getDocs } from "firebase/firestore";

export interface EventData {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

export const fetchEvents = async (): Promise<EventData[]> => {
  const colRef = collection(db, "events");
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    title: doc.data().title,
    start: doc.data().start.toDate(),
    end: doc.data().end.toDate(),
  }));
};
