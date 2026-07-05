-- Run once if waitlist already exists without unsubscribe_token.

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS unsubscribe_token UUID DEFAULT gen_random_uuid();

UPDATE waitlist
SET unsubscribe_token = gen_random_uuid()
WHERE unsubscribe_token IS NULL;

ALTER TABLE waitlist
  ALTER COLUMN unsubscribe_token SET NOT NULL,
  ALTER COLUMN unsubscribe_token SET DEFAULT gen_random_uuid();

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'waitlist_unsubscribe_token_unique'
  ) THEN
    ALTER TABLE waitlist
      ADD CONSTRAINT waitlist_unsubscribe_token_unique UNIQUE (unsubscribe_token);
  END IF;
END $$;
