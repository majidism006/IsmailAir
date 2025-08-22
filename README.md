# IsmailAir - Premium Airline Booking System

A modern, beautiful airline booking website built with React, TypeScript, and Three.js. Features a stunning 3D plane visualization and smooth animations.

## ✨ Features

- **Modern Design**: Clean, responsive UI with beautiful animations
- **3D Plane Showcase**: Interactive 3D model viewer using Three.js
- **Flight Booking**: Simple and intuitive flight search interface
- **Responsive Layout**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion powered transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd IsmailAir
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Build

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 🎨 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── FlightSearch.tsx # Flight booking form
│   ├── PlaneShowcase.tsx # 3D plane viewer
│   ├── Features.tsx    # Features section
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 3D Model

The website includes a 3D plane model (`plane.gltf`) that can be viewed interactively in the Plane Showcase section. Users can:
- Rotate the model
- Zoom in/out
- Pan around the view

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `air-blue` color palette.

### Styling
Global styles and component styles are defined in `src/index.css` with Tailwind CSS utilities.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Ismail Majid** - Building the future of air travel booking

---

Built with ❤️ and ☕
