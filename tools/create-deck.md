# create\_deck

Queue a PowerPoint deck generation job.

**Type:** Write  
**Required scope:** `decks:write`  
**Credit cost:** 10 credits per slide, reserved upfront. Unused credits are refunded automatically if the job produces fewer slides.

---

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `prompt` | string | Yes | What the deck should be about — topic, audience, tone, structure, key facts. The more specific, the better result. |
| `slides` | integer | Yes | Number of slides to generate. Range: 1–40. |
| `master_id` | string | No | ID of an uploaded brand template (from `list_masters`). Omit to use the default Decky design. |

---

## Response

Returns a job object:

```json
{
  "id": "job_abc123",
  "status": "queued",
  "prompt": "10-slide investor pitch for a B2B SaaS startup...",
  "master_id": null,
  "slides_requested": 10,
  "credits_reserved": 100,
  "credits_charged": null,
  "progress": null,
  "error": null,
  "created_at": "2026-06-23T10:00:00Z",
  "finished_at": null
}
```

Use the `id` to poll [`get_deck_status`](get-deck-status.md).

---

## Job statuses

| Status | Meaning |
|---|---|
| `queued` | Job is waiting to start |
| `running` | Generation in progress |
| `succeeded` | Deck is ready for download |
| `failed` | Generation failed (see `error` field) |
| `canceled` | Job was canceled via `cancel_deck` |

---

## Example prompts

**Detailed prompt (best results):**

```
Create a 12-slide strategic pitch deck for Maven Labs, a B2B SaaS company 
that automates financial reporting for mid-market CFOs. Audience: Series B 
investors. Include: problem, solution, market size ($8B TAM), product demo 
slide, traction (3× YoY growth), team, and ask ($5M). Tone: confident, 
data-driven. Use charts and bullet points.
```

**Short prompt (quicker, less structured):**

```
10-slide deck on the future of renewable energy
```

**With a brand template:**

First call `list_masters` to get the template ID, then:

```
Create a 15-slide product launch deck for our new enterprise security 
product. Use master_id "tmpl_xzy789". Audience: IT decision makers.
```

---

## Errors

| Error | Cause | Fix |
|---|---|---|
| `Insufficient credits` | Not enough credits for the requested slide count | Reduce slides, or [upgrade your plan](../credits-and-plans.md) |
| `Too many active jobs` | You already have jobs queued or running | Wait for one to finish, or cancel it with `cancel_deck` |
| `Unknown master_id` | The template ID doesn't exist on your account | Call `list_masters` to get valid IDs |

---

## Notes

- Credits are reserved at submission time. If the job fails or is canceled, all reserved credits are refunded.
- The `slides` parameter is a target — the AI may occasionally produce one fewer slide if the content doesn't warrant it.
- Maximum 40 slides per job. For longer decks, create multiple jobs.
