# check\_usage

Get your credit balance for the current billing period.

**Type:** Read  
**Required scope:** `usage:read`  
**Credit cost:** Free

---

## Parameters

None.

---

## Response

```json
{
  "plan": "pro",
  "monthly_credits": 5000,
  "used": 340,
  "remaining": 4660,
  "period_end": "2026-07-23T00:00:00Z",
  "pricing": "10 credits per generated slide"
}
```

| Field | Description |
|---|---|
| `plan` | Your current plan ID (`free`, `starter`, `pro`, `enterprise`). |
| `monthly_credits` | Total credits allocated per billing period. |
| `used` | Credits consumed this period (settled charges only; reserved-but-unfinished jobs are not counted). |
| `remaining` | Credits still available. |
| `period_end` | When the current billing period ends and credits reset. |
| `pricing` | Reminder of the cost model. |

---

## Notes

- Credits reset at the start of each billing period.
- `used` reflects settled charges only. A running job has credits reserved but those aren't counted as `used` until the job completes.
- See [Credits & Plans](../credits-and-plans.md) for full plan details.
