# jQuery Advanced

<p align="center">
  <strong>DOM · AJAX · APIs · Dynamic UIs</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/jQuery-3.7.1-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
</p>

---

## 📋 Overview

This project is a **progressive set of jQuery exercises** that go from loading jQuery and creating DOM elements to building **Wikipedia search** and **REST API** (json-server) integrations with forms, pagination, and CRUD operations.

```
┌────────────────────────────────────────────────────────────────────┐
│  Task 0–2   │  DOM basics (load, create elements, tables)          │
├────────────────────────────────────────────────────────────────────┤
│  Task 3–6   │  Family tree + form, replace, add/remove, Wikipedia  │
├────────────────────────────────────────────────────────────────────┤
│  Task 7–9   │  Wikipedia search + pagination + loading state       │
├────────────────────────────────────────────────────────────────────┤
│  Task 10–12 │  json-server: list posts, create, delete             │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🗂 Project structure

```
JQuery_advanced/
├── 0-index.html    ← jQuery load check
├── 1-index.html    ← Create paragraph (Lorem ipsum)
├── 2-index.html    ← Family table (HTML string)
├── 3-index.html    ← Family table (jQuery objects)
├── 4-index.html    ← Replace family tree content
├── 5-index.html    ← Add members + remove (x)
├── 6-index.html    ← Form to add member (before/after)
├── 7-index.html    ← Wikipedia search (basic)
├── 8-index.html    ← Wikipedia + pagination
├── 9-index.html    ← Wikipedia + loading state
├── 10-index.html   ← List posts (GET /posts)
├── 11-index.html   ← List + create post (POST)
├── 12-index.html   ← List + create + delete post
├── db.json         ← json-server data (tasks 10–12)
└── README.md
```

---

## 📚 Task summary

| # | File | What it does |
|---|------|---------------|
| **0** | `0-index.html` | Verifies jQuery is loaded (console message). |
| **1** | `1-index.html` | Appends a `<p>` with Lorem ipsum via jQuery. |
| **2** | `2-index.html` | Builds a family table from an HTML string. |
| **3** | `3-index.html` | Builds the same table using jQuery element creation. |
| **4** | `4-index.html` | Creates family tree then replaces `<tbody>` with one row. |
| **5** | `5-index.html` | Family tree + `addNewMember()` with orange “(x)” to remove row. |
| **6** | `6-index.html` | Family tree + form: add member **before** or **after** with remove “(x)”. |
| **7** | `7-index.html` | Wikipedia search form → GET Wikipedia API → show results in `<ul>`. |
| **8** | `8-index.html` | Same as 7 + **pagination** (10 results per page). |
| **9** | `9-index.html` | Same as 8 + **loading** state (opacity wrap). |
| **10** | `10-index.html` | **GET** `http://localhost:3000/posts` and list posts (needs json-server). |
| **11** | `11-index.html` | List posts + **form** to **POST** new post. |
| **12** | `12-index.html` | List + create + **delete** post (DELETE by id). |

---


## 🛠 Tech stack

| Layer | Tech |
|-------|------|
| **Library** | jQuery (slim for 0–6, full for 7–12) |
| **Markup** | HTML5 |
| **Logic** | Vanilla JavaScript + jQuery |
| **API (tasks 7–9)** | Wikipedia API (`en.wikipedia.org/w/api.php`) |
| **API (tasks 10–12)** | json-server (REST on `db.json`) |

---

## 📜 License

Part of the Holberton School Web Front End curriculum.

---
