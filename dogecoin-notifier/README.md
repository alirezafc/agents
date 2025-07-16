# Dogecoin Daily Notifier with n8n

This workflow fetches the daily Dogecoin price, compares it with the previous day, sends a Telegram message, and stores the result in a Postgres database.

## 🔧 Stack
- [x] n8n
- [x] Telegram Bot
- [x] Postgres

## 🔁 Workflow Steps

1. Trigger every morning at 7 AM
2. Fetch Dogecoin price from an external API
3. Compare with yesterday's price from DB
4. Send alert via Telegram
5. Save today's price to DB

## 🖼 Workflow Preview
![workflow](workflow.png)

## 📦 JSON Export
You can import this workflow into n8n directly using the provided `.json` file.

## ✅ Sample Output
