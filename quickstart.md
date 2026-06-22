# Quickstart

Get Decky AI connected to your AI assistant in under 5 minutes. Pick the path that matches your client.

---

## Path A — Claude.ai web (recommended, no API key)

The fastest way to get started. Authentication happens through Decky's secure sign-in — no API key to copy or store.

### Step 1 — Open Claude connectors

Go to [claude.ai/customize/connectors](https://claude.ai/customize/connectors) and click **Add custom connector**.

### Step 2 — Enter the server URL

```
https://mcp.decky-ai.com/mcp
```

Click **Save** (or **Add**).

### Step 3 — Sign in to Decky

Claude redirects you to Decky's sign-in page. Use the same account you use at [platform.decky-ai.com](https://platform.decky-ai.com). If you don't have an account yet, a free one is created automatically.

Once connected, Decky's tools appear in your Claude conversations. You'll see a small tool icon when Claude is using them.

### Step 4 — Generate a deck

Start a new conversation and ask:

> "Create a 10-slide deck about the future of electric vehicles, written for a general audience."

Claude will call `create_deck`, then poll every ~10 seconds until the deck is ready (typically 3–10 minutes depending on slide count). When it's done, Claude will give you a download link for the `.pptx` file.

---

## Path B — Claude Desktop (API key)

Use this if you run Claude Desktop on your Mac or Windows PC.

### Step 1 — Get your API key

1. Go to [platform.decky-ai.com](https://platform.decky-ai.com) and sign in.
2. Open **API Keys** in the left sidebar.
3. Click **Create key**, give it a name (e.g. "Claude Desktop"), and click **Create**.
4. **Copy the key now** — it starts with `dk_live_` and is shown only once.

### Step 2 — Edit the Claude Desktop config file

Open a text editor and edit this file:

- **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Add the `mcpServers` block (create the file if it doesn't exist):

```json
{
  "mcpServers": {
    "decky-ai": {
      "url": "https://mcp.decky-ai.com/mcp",
      "headers": {
        "Authorization": "Bearer dk_live_YOUR_KEY_HERE"
      }
    }
  }
}
```

Replace `dk_live_YOUR_KEY_HERE` with the key you copied.

### Step 3 — Restart Claude Desktop

Quit and reopen Claude Desktop. You should see a hammer icon (🔨) in the chat input area — click it to confirm Decky's tools are listed.

### Step 4 — Generate a deck

Ask Claude:

> "Create a 10-slide investor pitch for a B2B SaaS startup that reduces food waste."

---

## Path C — Claude Code (developers)

For the CLI:

```bash
claude mcp add decky-ai --transport http https://mcp.decky-ai.com/mcp \
  -H "Authorization: Bearer dk_live_YOUR_KEY_HERE"
```

Verify it's connected:

```bash
claude mcp list
```

---

## Path D — Cursor

Open **Settings → MCP**, or edit `.cursor/mcp.json` in your project:

```json
{
  "mcpServers": {
    "decky-ai": {
      "url": "https://mcp.decky-ai.com/mcp",
      "headers": {
        "Authorization": "Bearer dk_live_YOUR_KEY_HERE"
      }
    }
  }
}
```

---

## What to expect

| Phase | What happens |
|---|---|
| Immediately | `create_deck` queues the job, reserves credits |
| 0–30 seconds | Job moves from `queued` to `running` |
| 1–10 minutes | Slides generate one by one (progress shown) |
| Done | Status becomes `succeeded`, download link available |
| Download link | Expires after a few minutes — ask Claude for a fresh one |
| File storage | `.pptx` files are kept for 30 days |

---

## Next steps

- [Use your own brand template](brand-templates.md) — upload a master `.pptx` and Decky will apply your colors, fonts, and layouts.
- [Understand credits](credits-and-plans.md) — each slide costs 10 credits; unused credits are always refunded.
- [Full tool reference](tools/README.md) — everything Claude can call on your behalf.
