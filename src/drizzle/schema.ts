import {
  pgTable,
  serial,
  timestamp,
  varchar,
  boolean, 
  jsonb,
  unique
} from 'drizzle-orm/pg-core';

export const jyotirmoyDevNewsletterSubscribers = pgTable("jyotirmoy_dev_newsletter_subscribers", {
	id: serial().primaryKey().notNull(),
	email: varchar({ length: 255 }).notNull(),
	name: varchar({ length: 100 }),
	subscribedAt: timestamp("subscribed_at", { mode: 'string' }).defaultNow(),
	isActive: boolean("is_active").default(true),
	unsubscribedAt: timestamp("unsubscribed_at", { mode: 'string' }),
	preferences: jsonb(),
}, (table) => [
	unique("jyotirmoy_dev_newsletter_subscribers_email_key").on(table.email),
]);