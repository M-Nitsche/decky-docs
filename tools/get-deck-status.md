# get\_deck\_status

Get the current status and progress of a deck generation job.

**Type:** Read  
**Required scope:** `decks:read`  
**Credit cost:** Free

---

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `job_id` | string | Yes | The job ID returned by `create_deck`. |

---

## Response

```json
{
  "id": "job_abc123",
  "status": "running",
  "prompt": "10-slide investor pitch...",
  "master_id": null,
  "slides_requested": 10,
  "credits_reserved": 100,
  "credits_charged": null,
  "progress": {
    "slides_done": 4
  },
  "error": null,
  "created_at": "2026-06-23T10:00:00Z",
  "finished_at": null
}
```

---

## Status lifecycle

```
queued → running → succeeded
                 ↘ failed
                 ↘ canceled
```

| Status | `progress.slides_done` | `finished_at` | `credits_charged` |
|---|---|---|---|
| `queued` | `null` | `null` | `null` |
| `running` | Updates as slides finish | `null` | `null` |
| `succeeded` | Equal to slides produced | Set | Final value |
| `failed` | Last value before failure | Set | Refunded to 0 |
| `canceled` | Last value | Set | Refunded to 0 |

---

## Polling recommendations

- Poll every **10 seconds** while status is `queued` or `running`.
- A 10-slide deck typically takes **3–7 minutes**.
- A 40-slide deck can take up to **20 minutes**.
- Stop polling as soon as status is `succeeded`, `failed`, or `canceled`.

Claude handles this automatically. You only need to call this tool manually if you're building a custom integration.

---

## Errors

| Error | Cause |
|---|---|
| `Deck job 'X' not found` | Invalid job ID, or the job belongs to a different account. Call `list_decks` to see your jobs. |
