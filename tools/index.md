# Tool Reference

Decky AI exposes 7 tools via MCP. Your AI assistant calls these automatically when you ask it to generate or manage decks — you don't need to call them manually.

---

## Typical workflow

```
list_masters          ← (optional) pick a brand template
    ↓
create_deck           ← start a job, credits reserved
    ↓
get_deck_status       ← poll until "succeeded" (~10s interval)
    ↓
get_deck_download_url ← get the .pptx download link
```

Supporting tools:

- `list_decks` — see your recent jobs
- `cancel_deck` — cancel a queued or running job
- `check_usage` — check your credit balance

---

## Tool summary

| Tool | Type | Requires scopes | Cost |
|---|---|---|---|
| [`create_deck`](create-deck.md) | Write | `decks:write` | 10 credits × slides |
| [`get_deck_status`](get-deck-status.md) | Read | `decks:read` | Free |
| [`get_deck_download_url`](get-deck-download-url.md) | Read | `decks:read` | Free |
| [`list_decks`](list-decks.md) | Read | `decks:read` | Free |
| [`cancel_deck`](cancel-deck.md) | Write | `decks:write` | Free (credits refunded) |
| [`list_masters`](list-masters.md) | Read | `masters:read` | Free |
| [`check_usage`](check-usage.md) | Read | `usage:read` | Free |
