-- Soft unsubscribe: keep email rows, track when they opted out.

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS unsubscribed_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS waitlist_active_idx
  ON waitlist (created_at DESC)
  WHERE unsubscribed_at IS NULL;
