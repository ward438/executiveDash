# Data Quality Memo — costs.json

**File:** `src/data/costs.json`  
**Status:** Raw / Unmodified — dirty rows intentionally preserved  
**Date noted:** 2026-07-10

---

## Known Dirty Rows

The following issues exist in the stub data. They are documented here so any transformation or display logic knows what to expect. **Do not edit the source file.** All cleansing must happen in application code.

### 1. Null cost value

```json
{
  "date": "2026-05-01",
  "account_name": "Data Analytics",
  "account_id": "222222222222",
  "service": "SageMaker",
  "region": "us-east-1",
  "owner": "Sarah Chen",
  "cost": null,
  "budget": 12000
}
```

**Issue:** `cost` is `null`. Aggregations must guard against this (skip or treat as 0).

---

### 2. Negative cost value

```json
{
  "date": "2026-06-01",
  "account_name": "Platform Engineering",
  "account_id": "111111111111",
  "service": "EC2",
  "region": "us-east-1",
  "owner": "Mike Torres",
  "cost": -1200,
  "budget": 50000
}
```

**Issue:** `cost` is `-1200`. Likely a billing credit or refund. Decide at feature time whether to include in totals or flag separately.

---

### 3. Null owner

```json
{
  "date": "2026-06-01",
  "account_name": "Networking",
  "account_id": "333333333333",
  "service": "CloudFront",
  "region": "us-east-1",
  "owner": null,
  "cost": 12100,
  "budget": 10000
}
```

**Issue:** `owner` is `null`. Any owner-based grouping or display must handle this case (e.g., show "Unknown").

---

### 4. Non-standard date format

```json
{
  "date": "06/01/2026",
  ...
}
```

**Issue:** Date uses `MM/DD/YYYY` format. All other rows use `YYYY-MM-DD`. Date parsing and sorting must normalize this before use.

---

### 5. Typo in account name

```json
{
  "account_name": "Platfrom Engineering",
  "account_id": "111111111111",
  ...
}
```

**Issue:** `"Platfrom Engineering"` is a typo for `"Platform Engineering"`. Any join or grouping against `summary.json` by `account_name` will fail to match this row. Account ID (`111111111111`) is correct and can be used as the reliable key.

---

## Integrity Rule

`src/data/summary.json` and `src/data/costs.json` are the canonical source of truth for stub data. They must never be modified. All data cleansing and normalization belongs in application code.
