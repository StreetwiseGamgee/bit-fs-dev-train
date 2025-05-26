import sql from 'better-sqlite3';

const db = sql('meals.db');// Execs sql as a function

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Arbit delay to simulate latentcy.

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all(); // Run() would be used if we we're INSERTing data, and get() if fetching a single row. 
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}