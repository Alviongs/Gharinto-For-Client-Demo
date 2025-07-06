 # Gharinto Platform - Client Demo

A three-sided marketplace for India’s home interiors and renovation projects, connecting homeowners, interior designers, material suppliers, and project managers in one unified ecosystem.

## 🚀 Tech Stack

- React (Create React App with CRACO)
- Tailwind CSS
- PostCSS & Autoprefixer
- React Router
- JavaScript (ES6+)

## 📂 Project Structure

```bash
frontend/
├─ public/
│  └─ index.html             # Static HTML template
├─ src/
│  ├─ components/           # Reusable UI components organized by role
│  ├─ App.js                # Root component with application routing
│  ├─ index.js              # Application entry point
│  └─ sampleData.js         # Mock data for dashboard demos
├─ craco.config.js          # CRA override configuration
├─ postcss.config.js        # PostCSS setup
├─ tailwind.config.js       # Tailwind CSS configuration
├─ package.json             # Project metadata and scripts
└─ .gitignore               # Git ignore patterns
```

## ⚙️ Installation & Development

1. Clone the repository:

```powershell
git clone https://github.com/Alviongs/Gharinto-For-Client-Demo.git
cd Gharinto-For-Client-Demo/frontend
```

2. Install dependencies:

```powershell
npm install
```

3. Start the development server:

```powershell
npm start
```

4. Open the app in your browser:

```
http://localhost:3000
```

## ✅ Completed Dashboards

- **Project Manager Dashboard**: 100% — Gantt charts, budget tracking, procurement, quality control, and more
- **Designer Dashboard**: 95% — Lead marketplace, BOQ generator, portfolio showcase, digital wallet, analytics
- **Admin Dashboard**: 90% — User & vendor management, communication hub, system settings (Service & Portfolio modules pending)

## ⚠️ In Progress

- **Vendor Portal**: 70% — Inventory management, order processing, vendor financials
- **Procurement Portal**: 60% — Advanced inventory analytics, purchase order automation
- **Customer Portal**: 40% — Project overview, document vault, payment integration, feedback system

## 📦 Production Build & Deployment

1. Build for production:

```powershell
npm run build
```

2. Deploy the contents of the `build/` folder to any static hosting service (Netlify, Vercel, GitHub Pages).

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create a feature branch:

```powershell
git checkout -b feature/YourFeature
```

3. Commit your changes:

```powershell
git commit -m "feat: Describe your feature"
```

4. Push to your branch:

```powershell
git push origin feature/YourFeature
```

5. Open a Pull Request on GitHub.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
