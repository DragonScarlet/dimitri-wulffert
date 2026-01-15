# DS-CV-NexGen 🌟

A modern, interactive CV built with Angular to showcase professional skills and experience. This project serves as both a personal portfolio and a demonstration of Angular development expertise.

[![Angular Version](https://img.shields.io/badge/Angular-18+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Angular Material](https://img.shields.io/badge/Angular%20Material-18+-007ACC?style=for-the-badge&logo=angular&logoColor=white)](https://material.angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

## 🚀 Live Demo

[View Live CV](https://dimitriwulffert.github.io/cv-nex2/)

## 📖 About

This project is a self-hosted, interactive Curriculum Vitae implemented in Angular with Angular Material. It serves as a proof of Angular knowledge and modern web development skills, featuring:

- **Skills Categorization**: 8 distinct skill categories with color-coded visualization
- **Interactive Experience Timeline**: Dynamic project and role displays
- **Responsive Design**: Optimized for desktop and mobile devices
- **Catppuccin Theming**: Beautiful dark theme inspired by Catppuccin color palette
- **Self-Hosted**: No external dependencies, fully deployable to any static hosting

## 🎯 Purpose

This is a personal CV project and fun side project to:
- Demonstrate proficiency in Angular development
- Showcase modern web development practices
- Create an interactive portfolio for professional networking
- Explore Angular Material components and theming
- Practice full-stack web development concepts

## 🛠️ Technology Stack

- **Framework**: Angular 18+ with TypeScript
- **UI Library**: Angular Material with custom theming
- **Build Tool**: Angular CLI
- **Styling**: SCSS with Catppuccin Macchiato color scheme
- **Deployment**: Static hosting (GitHub Pages, Netlify, etc.)
- **Architecture**: Component-based with service-driven data management

## ✨ Key Features

### Skills Management
- **8 Skill Categories**: Programming Languages, Frameworks, Databases, Cloud Services, API Tools, General Tools, Testing Tools, Processes
- **Color-Coded Visualization**: Each category has a distinct color for easy identification
- **Experience-Based Levels**: Skills level up based on project time investment
- **Interactive Chips**: Hover effects and rating displays

### Experience Display
- **Timeline View**: Chronological project and role presentation
- **Project Details**: Comprehensive project descriptions and technologies used
- **Skill Integration**: Automatic skill highlighting based on project requirements

### Design & UX
- **Responsive Layout**: Mobile-first design approach
- **Dark Theme**: Catppuccin Macchiato inspired color palette
- **Smooth Animations**: Angular Material motion system
- **Accessibility**: WCAG compliant components

## 📁 Project Structure

```
src/
├── app/
│   ├── shared/
│   │   ├── skills.service.ts      # Skills management service
│   │   ├── chip/                  # Reusable skill chip component
│   │   └── skill.ts               # Skill model definitions
│   ├── skills/                    # Skills display component
│   ├── experience/                # Experience timeline component
│   └── about/                     # About/personal info component
├── assets/
│   └── svgs/                      # Technology icons
└── styles/                        # Global styles and themes
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Angular CLI 18+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dimitriwulffert/cv-nex2.git
   cd cv-nex2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🏗️ Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Architecture Notes

- **Component-Driven**: Modular component architecture
- **Service-Based**: Data management through Angular services
- **Type-Safe**: Full TypeScript implementation
- **Material Design**: Consistent UI with Angular Material

## 🚢 Deployment

### GitHub Pages
```bash
npm run build --prod
npx angular-cli-ghpages --dir=dist/cv-nex2
```

### Other Static Hosts
Build the project and deploy the `dist/cv-nex2` folder to any static hosting service (Netlify, Vercel, etc.).

## 🤝 Contributing

This is a personal project, but feel free to:
- Report bugs or issues
- Suggest improvements
- Fork and adapt for your own use

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

- **LinkedIn**: [Your LinkedIn Profile]
- **Email**: dimitri.wulffert@gmail.com
- **GitHub**: [https://github.com/dimitriwulffert]

---

*Built with ❤️ using Angular and Angular Material*