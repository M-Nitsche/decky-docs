# get\_deck\_download\_url

Get a short-lived download link for a finished deck.

**Type:** Read  
**Required scope:** `decks:read`  
**Credit cost:** Free

---

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `job_id` | string | Yes | The job ID of a `succeeded` deck job. |

---

## Response

```json
{
  "download_url": "https://deckystorage.blob.core.windows.net/...",
  "expires_in_seconds": 300,
  "filename": "deck-job_abc123.pptx"
}
```

| Field | Description |
|---|---|
| `download_url` | Direct HTTPS link to the `.pptx` file. Open it in a browser or pass it to a download tool. |
| `expires_in_seconds` | How long the link is valid. After it expires, call this tool again for a fresh link. |
| `filename` | Suggested filename for saving the file. |

---

## Notes

- Links expire quickly (a few minutes). If you need to share the file later, download it first and then share the local copy.
- Deck files are stored for **30 days** after generation. After that, the file is deleted and cannot be recovered — you would need to regenerate the deck.
- This tool only works when `status` is `succeeded`. If you call it on a job that's still running, you'll get an error.

---

## Errors

| Error | Cause | Fix |
|---|---|---|
| `Deck is not ready for download (status: 'running')` | Job hasn't finished yet | Poll `get_deck_status` until `succeeded` |
| `This deck has expired` | File was deleted after 30 days | Create a new job with `create_deck` |
| `Deck job 'X' not found` | Invalid job ID | Call `list_decks` to see your jobs |
