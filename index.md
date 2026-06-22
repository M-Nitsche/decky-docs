# Decky AI MCP Server

Turn any MCP-compatible AI assistant into a PowerPoint deck generator. Decky AI's MCP server lets Claude, Cursor, and other tools create complete, professionally designed `.pptx` files from a text description — no slides app required.

**Server URL:** `https://mcp.decky-ai.com/mcp`

---

## What you can do

| Say something like | What happens | Credit cost |
|---|---|---|
| "Create a 10-slide deck about our Q3 results" | Generates a complete PowerPoint deck | 10 credits per slide |
| "Make a deck about climate tech for investors, 15 slides" | Full deck with layout, charts placeholders, copy | 150 credits |
| "Use my company template and build a sales pitch" | Same as above, but with your uploaded brand design | 150 credits |
| "Check how many credits I have left" | Shows your balance and plan | Free |

Generation takes a few minutes. Your AI client polls automatically — you just wait for the download link.

---

## How it works

```
You → Claude → create_deck → Decky AI generates your .pptx
                get_deck_status (polls every ~10s)
                get_deck_download_url → you download the file
```

1. **You describe** what the deck should be about.
2. **Claude calls `create_deck`** and reserves credits upfront.
3. **Decky AI generates** the full PowerPoint in the background (a few minutes).
4. **Claude polls** `get_deck_status` until the job is `succeeded`.
5. **You get a download link** — a `.pptx` file ready to open in PowerPoint.

Unused credits (e.g. if a job produces fewer slides than requested) are always refunded automatically.

---

## Connection options

| Client | Auth method | Best for |
|---|---|---|
| Claude.ai web | OAuth — no API key needed | Quick start, non-developers |
| Claude Desktop | API key | Regular desktop users |
| Claude Code | API key | Developers / automation |
| Cursor | API key | Developers |
| Any MCP HTTP client | API key | Custom integrations |

→ **[Get started in 5 minutes](quickstart.md)**

---

## Agent Instructions

This documentation is published with GitBook. Markdown versions of all pages are available by appending `.md` to page URLs.
