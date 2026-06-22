# list\_decks

List your recent deck generation jobs.

**Type:** Read  
**Required scope:** `decks:read`  
**Credit cost:** Free

---

## Parameters

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `limit` | integer | No | 20 | Number of jobs to return. Range: 1–100. Jobs are returned newest first. |

---

## Response

Returns an array of job objects (same shape as `get_deck_status`):

```json
[
  {
    "id": "job_abc123",
    "status": "succeeded",
    "prompt": "10-slide investor pitch for...",
    "slides_requested": 10,
    "credits_charged": 100,
    "created_at": "2026-06-23T10:00:00Z",
    "finished_at": "2026-06-23T10:08:43Z"
  },
  {
    "id": "job_def456",
    "status": "running",
    "prompt": "5-slide product overview...",
    "slides_requested": 5,
    "credits_reserved": 50,
    "credits_charged": null,
    "created_at": "2026-06-23T10:15:00Z",
    "finished_at": null
  }
]
```

---

## Use cases

- Find a job ID you've lost track of.
- Check whether a long-running job has finished.
- Review your generation history.
