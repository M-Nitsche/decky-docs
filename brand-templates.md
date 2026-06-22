# Brand Templates

Upload your company's PowerPoint master template so Decky generates decks that match your brand — your colors, fonts, layouts, and logo.

---

## What is a master template?

A master template (also called a `.pptx` master) is a PowerPoint file that defines the look of your slides: backgrounds, color palettes, font choices, logo placement, and available layouts. Decky reads this file when generating a deck and applies your brand design to every slide.

---

## Upload a template

1. Go to [platform.decky-ai.com](https://platform.decky-ai.com) and sign in.
2. Click **Templates** in the left sidebar.
3. Click **Upload template** and select your `.pptx` file.
4. Give it a name (e.g. "Acme Corp 2026") and click **Upload**.

Decky processes the file (a few seconds) and extracts the available layouts. You'll see the template in your list with a preview of its layouts.

**Limits:** Up to 3 templates per account. To add a new one when at the limit, delete an existing template first.

### What makes a good master file?

- A `.pptx` file exported from PowerPoint or Google Slides (File → Download as .pptx).
- Contains at least one slide layout — the more layouts you include, the more design variety Decky can apply.
- Includes your brand colors in the theme palette (Format → Theme → Colors in PowerPoint).
- Has your logo on the slide master (not just on individual slides).

If you're not sure where to start, any existing company presentation works — Decky will extract the design from it.

---

## Use a template when generating a deck

### Via Claude (MCP)

Ask Claude to list your templates first:

> "What brand templates do I have available?"

Claude calls `list_masters` and returns a list like:

```
You have 1 template:
- "Acme Corp 2026" (id: tmpl_xyz789) — layouts: Title Slide, Content, Two Column, Blank
```

Then generate a deck with it:

> "Create a 10-slide sales deck about our enterprise security product. Use the Acme Corp 2026 template."

Claude passes `master_id: "tmpl_xyz789"` to `create_deck` automatically.

### Via API (direct)

```json
{
  "prompt": "10-slide sales deck about enterprise security...",
  "slides": 10,
  "master_id": "tmpl_xyz789"
}
```

---

## Template tips

| Tip | Why it matters |
|---|---|
| Include a "Title Slide" layout | Decky always uses this for the cover |
| Include a "Content" or "Text + Image" layout | Used for most body slides |
| Keep the file under 10 MB | Larger files slow upload and processing |
| Use standard PowerPoint theme colors | Decky extracts them for text and accent colors |
| Don't embed unusually large images | Reduces file size and processing time |

---

## Removing a template

Go to **Templates** on the platform, find the template, and click **Delete**. Decks already generated with that template are not affected.

{% hint style="info" %}
If you delete a template that's referenced in an existing job, the job will fall back to the default Decky design for new slides.
{% endhint %}
