# Connect Claude pictures

Sources of the pictures in `images/connect-claude`, used by the Quickstart. This folder is not published (`.mintignore`).

| Picture | Source |
| --- | --- |
| 1, 2, 3, 5 | Recreated in `connect-claude.html`. Sizes, colours and wording were measured from the live claude.ai on 2026-11-02. They stand in for screenshots so they stay sharp and show no account's data. Inter and Source Serif 4 replace Claude's proprietary fonts. |
| 4 | The real consent page: `consent.html` is the output of `render_consent()` in `backend/api/oauth_pages.py`, with a sample address. |
| 6 | The real deck card: `assets/deck-card.png` is `backend/api/mcp_views/deck.html` rendered through the harness in `mcp-views/test/harness`, with slides from the built-in board strategy deck. The bubble around it is in `connect-claude.html`. |

When Claude changes these screens, edit `connect-claude.html` and run this with a folder that has `playwright-core` and its Chromium:

```bash
NODE_PATH=/path/to/node_modules node mockups/render.cjs
```
