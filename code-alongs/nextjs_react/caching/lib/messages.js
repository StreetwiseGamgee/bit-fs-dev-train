import { cache } from 'react';
import { unstable_cache as nextCache } from 'next/cache';
import sql from 'better-sqlite3';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

export const getMessages = nextCache(
  // nextCache allows for data to be 'cacheable' by NextJS though requires a promise.
  cache(function getMessages() {
    // cache stores the query in memory, and prevents request de-duplication.
    console.log('Fetching messages from db');
    return db.prepare('SELECT * FROM messages').all();
  }), ['messages'], {
    tags: ['msg'],
  }
);
