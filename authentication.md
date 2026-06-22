# Authentication

Decky AI's MCP server supports two authentication methods. Use whichever fits your client.

---

## OAuth (no API key) {#oauth}

**Supported clients:** Claude.ai web

OAuth is the simplest option — you sign in once through a browser and Decky handles the rest. No API key to copy, store, or rotate.

**How it works:**

1. You add `https://mcp.decky-ai.com/mcp` as a custom connector in Claude.ai.
2. Claude redirects you to Decky's authorization page.
3. You sign in with your Decky account (Google or Microsoft).
4. Decky issues Claude a token — valid for the session, automatically refreshed.
5. Claude can now call Decky tools on your behalf.

**To disconnect:** Go to [platform.decky-ai.com](https://platform.decky-ai.com) → **Connections**, find the app, and click **Disconnect**. This immediately revokes all tokens for that client.

---

## API Key {#api-key}

**Supported clients:** Claude Desktop, Claude Code, Cursor, any HTTP MCP client

API keys are long-lived credentials you include in every request as a bearer token. They are suitable for desktop apps and automation.

### Creating an API key

1. Sign in at [platform.decky-ai.com](https://platform.decky-ai.com).
2. Go to **API Keys** in the left sidebar.
3. Click **Create key**.
4. Enter a name (e.g. "Cursor - work laptop") and choose an expiry.
5. Select the scopes you need (see [Scopes](#scopes) below).
6. Click **Create** and **copy the key immediately** — it starts with `dk_live_` and is only shown once.

<Warning>
**Store it securely.** Treat your API key like a password. If you lose it, you'll need to create a new one. Decky never stores the plaintext key — only a hash.
</Warning>

### Using an API key

Include it as a bearer token in every request:

```
Authorization: Bearer dk_live_YOUR_KEY_HERE
```

Example configs for each client:

**Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json` on Mac):

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

**Claude Code:**

```bash
claude mcp add decky-ai --transport http https://mcp.decky-ai.com/mcp \
  -H "Authorization: Bearer dk_live_YOUR_KEY_HERE"
```

**Cursor** (`.cursor/mcp.json`):

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

### Key expiry & rotation

Keys can be set to expire after 30 days, 90 days, 1 year, or never. When a key expires, requests will return `401 Unauthorized`. Create a new key and update your config before expiry.

You can have up to **10 active API keys** at once.

### Revoking a key

Go to **API Keys** on the platform, find the key, and click **Revoke**. The key stops working immediately.

---

## Scopes {#scopes}

Scopes limit what an API key (or OAuth grant) is allowed to do. When in doubt, select all scopes — they can be restricted later.

| Scope | What it allows |
|---|---|
| `decks:write` | Create and cancel deck jobs |
| `decks:read` | View job status, list jobs, download decks |
| `masters:write` | Upload brand templates *(reserved — not yet exposed via MCP)* |
| `masters:read` | List uploaded brand templates |
| `usage:read` | Check credit balance and plan info |

The default when creating a key is **all scopes**. For least-privilege setups (e.g. read-only monitoring), you can select only what you need.

---

## Security notes

- Keys are stored as SHA-256 hashes. The plaintext is never retrievable.
- OAuth tokens are short-lived and automatically refreshed.
- All connections are HTTPS only. The server rejects plain HTTP.
- IP filtering is not currently supported at the API-key level; use scopes to restrict capabilities.
