RoboBazaar — static demo

What this provides:
- `main.html` — AI/robotic-themed landing page with links to the shop.
- `index.html` — Shop page with 3 robot products, contact and about sections, and a client-side cart.
- `styles.css` — Styling for landing and shop.
- `script.js` — Minimal product rendering and cart logic (client-side, simulated checkout).
- `images/` — three SVG robot images.
 - `script.js` — Product rendering, persistent cart (localStorage), and a simulated checkout modal.
 - `images/` — eight SVG robot images.

How to run:
1. Open `index.html` or `main.html` directly in your browser (double-click the file or use your editor's "Open in Browser").
2. On `index.html`, add robots to cart and click Checkout — this is simulated via alert.

New features added:
- Persistent cart using localStorage so items remain after refresh.
- Checkout modal that collects shipping/payment inputs and simulates a payment.
- More products (8 robots total).

Notes:
- This is a static demo; no server or backend is required.
- If you want a real checkout flow, I can help wire Stripe/PayPal or a backend endpoint.
