# React Design System

A modern React component library built with Vite, TypeScript, Tailwind CSS, and shadcn/ui. This project implements Atomic Design principles and includes comprehensive testing and documentation.

## 🚀 Technologies

- **Vite**: Lightning fast build tool and dev server
- **React 18**: Modern UI development
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautifully designed components
- **Storybook**: Component documentation and testing
- **Vitest**: Unit testing with coverage reports
- **Testing Library**: React component testing

## 📁 Project Structure

```
src/
├── components/
│ ├── atoms/ # Basic building blocks (buttons, inputs)
│ ├── molecules/ # Simple combinations of atoms
│ ├── organisms/ # Complex combinations of molecules
│ ├── templates/ # Page layouts
│ └── ui/ # shadcn/ui components
├── lib/ # Utilities and helpers
├── pages/ # Application pages
├── styles/ # Global styles
└── test/ # Test setup and utilities
```

## 🛠️ Scripts

```
"scripts": {
"dev": "Start development server",
"build": "Build for production",
"test": "Run tests with coverage",
"storybook": "Start Storybook development server",
"build-storybook": "Build Storybook for deployment",
"prepare": "Build types and bundle",
"release": "Build and publish to npm"
}
```

## 🎨 Atomic Design

This project follows Atomic Design methodology:

1. **Atoms**: Basic UI components like buttons and inputs
2. **Molecules**: Simple component combinations (e.g., search bar)
3. **Organisms**: Complex UI sections (e.g., header)
4. **Templates**: Page layouts and structure
5. **Pages**: Complete page implementations

## 📚 Component Documentation

Components are documented using Storybook. Each component includes:

- Interactive examples
- Props documentation
- Different variants/states
- Responsive design previews

To view the documentation:

```
npm run storybook

```

## ✅ Testing

The project uses Vitest and Testing Library for comprehensive testing:

- Unit tests for components
- Integration tests for pages
- 80% minimum coverage requirement
- Snapshot testing

Run tests with:

```
npm test
```

## 🎯 Code Coverage

Current test coverage:

- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

## 🔧 Configuration

### Vite

```
typescript:vite.config.ts
```

### Tailwind

```
json:tsconfig.app.json
```

### TypeScript
```
json:tsconfig.app.json

```

## 📦 Installation

### Install dependencies
```npm install```

### Start development server
```npm run dev```

### Build for production
```npm run build```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.