# cancel\_deck

Cancel a queued or running deck job. Reserved credits are refunded in full.

**Type:** Write  
**Required scope:** `decks:write`  
**Credit cost:** Free (credits from the canceled job are refunded)

---

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `job_id` | string | Yes | The job ID to cancel. |

---

## Response

Returns the updated job object with `status: "canceled"`.

```json
{
  "id": "job_abc123",
  "status": "canceled",
  "credits_reserved": 100,
  "credits_charged": 0,
  "finished_at": "2026-06-23T10:03:12Z"
}
```

All reserved credits are returned to your balance immediately.

---

## Notes

- You can cancel jobs in `queued` or `running` state.
- Jobs that are `succeeded`, `failed`, or already `canceled` cannot be canceled again.
- Useful when you realize you've started too many jobs or want to free up your active job slots (the limit is a small number of concurrent jobs per account).

---

## Errors

| Error | Cause |
|---|---|
| `Job is already 'succeeded' and can no longer be canceled` | Job finished before cancel arrived |
| `Deck job 'X' not found` | Invalid job ID |
