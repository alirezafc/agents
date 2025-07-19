حتماً! در ادامه یک متن مناسب برای فایل `README.md` پروژه‌ی n8n Agent شما آماده کردم:

---

````markdown
# 🧠 n8n Product Scraper Agent

This is a custom **n8n automation agent** designed to receive a product name via a webhook, trigger a scraper script, and return results in a structured JSON format.

## 🚀 How It Works

1. **Webhook Trigger**: Accepts a `POST` request with a JSON body like:
   ```json
   {
     "product": "ps5"
   }
````

2. **Function Node**: Extracts and normalizes the product name from the incoming request.

3. **Execute Command Node**: Runs a custom script (`scraper.js`) with the product name as a parameter:

   ```bash
   node /data/scraper.js ps5
   ```

4. **Respond to Webhook Node**: Returns the script's output back to the requester.

## 📁 Folder Structure

```
project-root/
│
├── data/
│   └── scraper.js     # Your custom product scraping logic
├── n8n-workflow.json  # Exported n8n workflow
└── README.md
```

## 🛠 Requirements

* [n8n](https://n8n.io) installed and running (Docker or local)
* Node.js installed (for `scraper.js` execution)
* Webhook accessible via localhost or public domain (e.g., using [ngrok](https://ngrok.com))

## 🌐 Example Request

You can test the agent using [ReqBin](https://reqbin.com/) or `curl`:

```bash
curl -X POST http://localhost:5678/webhook/scrape-product \
  -H "Content-Type: application/json" \
  -d '{"product": "ps5"}'
```

## 📦 Output Example

```json
{
  "status": "success",
  "results": [
    {
      "title": "PlayStation 5 Console",
      "price": "$499.99",
      "url": "https://example.com/product/ps5"
    },
    ...
  ]
}
```

## 📌 Notes

* Make sure `scraper.js` returns valid JSON via `console.log`.
* If you're running n8n in Docker, make sure `/data/scraper.js` exists in the container.

## 💬 License

MIT License

```

---


```
