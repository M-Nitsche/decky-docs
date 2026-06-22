# Troubleshooting

---

## Connection issues

### "Claude says Decky tools are not available"

**Claude Desktop / Claude Code / Cursor:**

1. Confirm the server URL is exactly `https://mcp.decky-ai.com/mcp` (no trailing slash).
2. Check the `Authorization` header is `Bearer dk_live_YOUR_KEY` (not `Token`, not `API-Key`).
3. Restart Claude Desktop (quit fully, reopen).
4. In Claude Desktop, click the hammer icon (🔨) to inspect connected tools. If Decky isn't listed, the config file has a syntax error — validate it at [jsonlint.com](https://jsonlint.com).

**Claude.ai web:**

1. Go to [claude.ai/customize/connectors](https://claude.ai/customize/connectors) and check the connector is listed as connected.
2. If it shows an error, remove it and re-add the URL `https://mcp.decky-ai.com/mcp`.
3. Make sure you signed in to Decky with the same account as your platform account.

---

### "401 Unauthorized"

Your API key is invalid, expired, or has been revoked.

1. Go to [platform.decky-ai.com](https://platform.decky-ai.com) → **API Keys**.
2. Check whether the key is listed and not revoked.
3. If it's expired or revoked, create a new key and update your config.
4. Keys are shown only once at creation — if you lost it, you must create a new one.

---

### "Your API key does not have the '…' scope"

Your key was created without the scope needed for the operation.

1. Go to **API Keys** on the platform.
2. The existing key cannot have scopes added — revoke it and create a new one with all needed scopes.
3. The default "all scopes" option includes everything.

---

## Generation issues

### "Deck is taking a long time"

Generation time scales with slide count:
- 5 slides → ~2–4 minutes
- 10 slides → ~4–8 minutes
- 20 slides → ~8–15 minutes
- 40 slides → up to ~25 minutes

This is expected. Claude polls automatically — you don't need to keep the conversation open.

---

### "Job failed"

If a deck job fails, the `error` field on the job object explains why. Common causes:

| Error message | Fix |
|---|---|
| `Generation error: content policy` | The prompt contains content that was blocked. Rephrase it. |
| `Storage unavailable` | Transient infrastructure issue. Retry with `create_deck`. |
| `Template processing failed` | The master file may be corrupted. Try re-uploading it from [platform.decky-ai.com](https://platform.decky-ai.com). |

All credits from a failed job are refunded automatically.

---

### "The download link expired"

Download links are short-lived (a few minutes). Ask Claude for a fresh one:

> "Can you give me a new download link for my deck?"

Claude calls `get_deck_download_url` again with the same job ID.

---

### "The deck file has expired"

Deck files are stored for **30 days**. After that they are deleted. You'll need to regenerate:

> "Regenerate the deck about [topic] — the old one expired."

---

## Credit issues

### "Insufficient credits"

You don't have enough credits in the current period. Options:

- Ask for fewer slides: "Create a 5-slide deck instead of 10."
- Wait until your period resets: `check_usage` shows the `period_end` date.
- Upgrade at [platform.decky-ai.com](https://platform.decky-ai.com) → **Billing**.

---

### "Too many active jobs"

You have too many queued/running jobs. Wait for one to finish, or cancel one:

> "Cancel my currently running deck job."

---

## Still stuck?

Contact support at [platform.decky-ai.com](https://platform.decky-ai.com) or email **support@decky-ai.com**.

When you reach out, include:
- The job ID (e.g. `job_abc123`) if the issue is with a specific deck.
- The error message you saw.
- Which client you're using (Claude.ai web, Claude Desktop, Cursor, etc.).
