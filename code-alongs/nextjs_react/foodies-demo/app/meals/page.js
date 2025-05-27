import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
    // Server-comp only runs on server
    const meals = await getMeals();
    
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {


    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created{' '} 
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe, and create it yourself! It is easy, and fun!!! </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                    Share your favorite recipie!
                    </Link>
                </p>
            </header>
            <main className={classes.name}>
                <Suspense fallback={<p className={classes.loading}> Fetching meals...</p>}> {/* Handles loading states and shows fall-back content */}
                    <Meals /> {/* Outsourced Retrieval to sep. comp. */}
                </Suspense>
               
            </main>
        </>
    );
}