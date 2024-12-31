import './envConfig';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema';
import { ilike } from 'drizzle-orm';

export const db = drizzle(sql, { schema });

export const getSubscribers = async () => {
    return await db.query.jyotirmoyDevNewsletterSubscribers.findMany()
}

export const isSubscribed = async ({query}:{query:string}) => {
    const result = await db
    .select({email : schema.jyotirmoyDevNewsletterSubscribers.email})
    .from(schema.jyotirmoyDevNewsletterSubscribers)
    .where(ilike(schema.jyotirmoyDevNewsletterSubscribers.email, query))

    return result.length !== 0
};

export const subscribe = async (query:string) => {
    const result =  await db
    .insert(schema.jyotirmoyDevNewsletterSubscribers).values({
        email: query.toLowerCase(),
    })
    return result
}