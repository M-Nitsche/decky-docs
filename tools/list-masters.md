# list\_masters

List your uploaded brand templates.

**Type:** Read  
**Required scope:** `masters:read`  
**Credit cost:** Free

---

## Parameters

None.

---

## Response

Returns an array of master template objects:

```json
[
  {
    "id": "tmpl_xyz789",
    "name": "Acme Corp Brand 2026",
    "layouts": ["Title Slide", "Content", "Two Column", "Blank"],
    "created_at": "2026-05-01T09:00:00Z"
  }
]
```

| Field | Description |
|---|---|
| `id` | Pass this as `master_id` in `create_deck` to use this template. |
| `name` | The name you gave the template when uploading. |
| `layouts` | The slide layout names detected in the template. |
| `created_at` | When the template was uploaded. |

---

## Notes

- Templates are uploaded via the dashboard at [platform.decky-ai.com](https://platform.decky-ai.com) → **Templates**.
- You can have up to **3 master templates** per account.
- If the array is empty, no templates are uploaded yet. Decky will use its default design.

→ See [Brand Templates](../brand-templates.md) for a full guide on uploading and using templates.
