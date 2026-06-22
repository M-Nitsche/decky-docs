# Credits & Plans

Decky AI uses a credit system to meter deck generation. Every generated slide costs 10 credits; read operations (checking status, downloading, listing) are always free.

---

## How credits work

1. **Credits are reserved upfront.** When you call `create_deck` with 10 slides, 100 credits (10 × 10) are immediately reserved from your balance.
2. **Only finished slides are charged.** When the job completes, Decky charges only for the slides it actually produced. If it makes 9 instead of 10, you're charged 90 and 10 are refunded.
3. **Canceled or failed jobs are fully refunded.** All reserved credits come back immediately.
4. **Credits reset monthly.** Your full allocation is restored at the start of each billing period.

### Example

| Action | Credits reserved | Credits charged | Balance change |
|---|---|---|---|
| Start: 500 remaining | — | — | 500 |
| `create_deck` (10 slides) | 100 | — | 400 |
| Job succeeds (10 slides) | — | 100 | 400 (no change) |
| `create_deck` (5 slides) | 50 | — | 350 |
| Job canceled | — | 0 (refunded) | 400 |

---

## Plans

| Plan | Monthly credits | Slides per month | Pricing |
|---|---|---|---|
| **Free** | 200 | ~20 slides | Free forever |
| **Starter** | 2,000 | ~200 slides | Paid |
| **Pro** | 5,000 | ~500 slides | Paid |
| **Enterprise** | 50,000+ | ~5,000+ slides | Custom — contact sales |

All paid plans are billed monthly. Unused credits **do not roll over** to the next period.

Manage your subscription at [platform.decky-ai.com](https://platform.decky-ai.com).

---

## Checking your balance

Ask Claude:

> "How many credits do I have left?"

Or call `check_usage` directly. It returns your plan, total allocation, used amount, remaining balance, and period end date.

---

## Running low on credits

If you don't have enough credits for a job, `create_deck` returns an error like:

```
Insufficient credits: this job needs 100 (10 per slide) but only 40 remain 
in the current period on the 'free' plan.
```

Options:
- **Reduce the slide count** — ask for fewer slides.
- **Wait for the next billing period** — credits reset automatically.
- **Upgrade your plan** — go to [platform.decky-ai.com](https://platform.decky-ai.com) → **Billing**.

---

## Enterprise

For teams or high-volume use cases, the Enterprise plan offers a custom credit allocation, dedicated support, and volume pricing. [Contact us](https://platform.decky-ai.com) to learn more.
