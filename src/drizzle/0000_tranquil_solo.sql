-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "jyotirmoy_dev_newsletter_subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(100),
	"subscribed_at" timestamp DEFAULT now(),
	"is_active" boolean DEFAULT true,
	"unsubscribed_at" timestamp,
	"preferences" jsonb,
	CONSTRAINT "jyotirmoy_dev_newsletter_subscribers_email_key" UNIQUE("email")
);

*/