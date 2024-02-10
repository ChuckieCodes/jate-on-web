import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // check
  console.log("PUT to the database.");

  // create connection
  const db = await openDB("jate", 1);

  // set privileges
  const tx = db.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");
  const request = store.put({ id: '', value: content });
  const result = await request;

  console.log(`Successfully added data to database.`, result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // check
  console.log("Fetch data from database.");

  // create connection
  const db = await openDB("jate", 1);

  // set privileges
  const tx = db.transaction("jate", "readonly");

  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  
  console.log("Fetched from the database.", result);

  return result?.value;
};

initdb();
