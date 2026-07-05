-- Run once on your PostgreSQL database (psql, Neon SQL editor, Railway, etc.)

CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  unsubscribe_token UUID NOT NULL DEFAULT gen_random_uuid(),
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT waitlist_email_unique UNIQUE (email),
  CONSTRAINT waitlist_unsubscribe_token_unique UNIQUE (unsubscribe_token)
);

CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at DESC);
CREATE INDEX IF NOT EXISTS waitlist_active_idx
  ON waitlist (created_at DESC)
  WHERE unsubscribed_at IS NULL;
