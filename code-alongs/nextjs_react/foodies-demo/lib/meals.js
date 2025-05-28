import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');// Execs sql as a function

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Arbit delay to simulate latentcy.

    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all(); // Run() would be used if we we're INSERTing data, and get() if fetching a single row. 
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
    // Creates new slug by calling on slugify.
    // In this case we're calling on the meal's title, and forcing all characters to be lowercase 
    // const slug = slugify(meal.title, {lower: true}) 
    // const instructions = xss(meal.instructions); // Sanitizes, and cleans instructions.

    /* ALTERNATIVLY */
    // Instead of using constants or variables, 
    meal.slug = slugify(meal.title, { lower: true }); // we can simply add the slug property to 'meal'
    meal.instructions = xss(meal.instructions); // 'overwrites' with sanitized instructions.

    console.log(meal.image);
    console.log(meal.image?.name); // Check if `name` exists

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer(); // Buffer is required for write method to work.

    // Syntax: stream.write(Buffer.from(theThingYouWantToWrite), (error) => {executedFunction}
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
    INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )

    `).run(meal);
}