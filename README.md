# TypeScript Learning Project

A comprehensive TypeScript learning project covering fundamental to advanced concepts including interfaces, classes, DOM manipulation, generics, namespaces, and nominal typing.

## 📚 Learning Objectives

By the end of this project, you will be able to explain and implement:

- **Basic Types in TypeScript** - Understanding primitive and complex types
- **Interfaces, Classes, and Functions** - Object-oriented programming concepts
- **DOM Manipulation with TypeScript** - Working with web APIs
- **Generic Types** - Creating reusable, type-safe components
- **Namespaces** - Organizing code and avoiding naming conflicts
- **Declaration Merging** - Extending existing interfaces and modules
- **Ambient Namespaces** - Importing external libraries
- **Nominal Typing** - Brand convention for type safety

## 🛠️ Requirements

### Development Environment
- **Allowed Editors**: vi, vim, emacs, Visual Studio Code
- **Platform**: Ubuntu 18.04 (for transpilation)
- **Testing**: Jest (version 24.9.*)
- **File Extensions**: `.ts` for TypeScript files

### Code Standards
- All files must end with a new line
- TypeScript compiler should show no warnings or errors
- Use TypeScript types whenever possible
- A `README.md` file is mandatory in the project root

## 📁 Project Structure

```
0x04-TypeScript/
├── README.md
├── task_0/
│   ├── js/main.ts
│   ├── package.json
│   ├── .eslintrc.js
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_1/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_2/
│   ├── js/main.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_3/
│   ├── js/
│   │   ├── main.ts
│   │   ├── interface.ts
│   │   ├── crud.d.ts
│   │   └── crud.js
│   ├── package.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── task_4/
│   ├── js/
│   │   ├── main.ts
│   │   └── subjects/
│   │       ├── Teacher.ts
│   │       ├── Subject.ts
│   │       ├── Cpp.ts
│   │       ├── Java.ts
│   │       └── React.ts
│   ├── package.json
│   └── tsconfig.json
└── task_5/
    ├── js/main.ts
    ├── package.json
    ├── tsconfig.json
    └── webpack.config.js
```

## 🎯 Tasks Overview

### Task 0: Creating an Interface for a Student
- **Focus**: Basic interfaces and DOM manipulation
- **Concepts**: Interface definition, array handling, vanilla JavaScript with TypeScript
- **Output**: Render a table displaying student information

### Task 1: Teacher Interface
- **Focus**: Advanced interface features
- **Concepts**: Optional properties, readonly modifiers, index signatures
- **Key Feature**: Dynamic property addition without explicit declaration

### Task 2: Extending Interfaces
- **Focus**: Interface inheritance
- **Concepts**: Interface extension, implementing multiple interfaces
- **Implementation**: Directors interface extending Teacher

### Task 3: Function Interfaces
- **Focus**: Function type definitions
- **Concepts**: Function signatures, interface for functions
- **Example**: `printTeacher` function with proper typing

### Task 4: Class Implementation
- **Focus**: Class structure and interfaces
- **Concepts**: Constructor interfaces, method definitions, class typing
- **Implementation**: StudentClass with proper interface contracts

### Task 5: Advanced Types Part 1
- **Focus**: Interface implementation and factory functions
- **Concepts**: Multiple interface implementation, conditional logic
- **Features**: Director and Teacher classes with createEmployee factory

### Task 6: Employee-Specific Functions
- **Focus**: Type predicates and conditional execution
- **Concepts**: Type guards, function overloading
- **Implementation**: `isDirector` predicate and `executeWork` function

### Task 7: String Literal Types
- **Focus**: Literal type definitions
- **Concepts**: Union types, string literals, type safety
- **Implementation**: Subject type with Math/History values

### Task 8: Ambient Namespaces
- **Focus**: External library integration
- **Concepts**: Ambient declarations, triple-slash directives, .d.ts files
- **Implementation**: CRUD operations with external library

### Task 9: Namespace & Declaration Merging
- **Focus**: Code organization and module augmentation
- **Concepts**: Namespaces, declaration merging, module system
- **Implementation**: Subject-based class hierarchy

### Task 10: Main File Update
- **Focus**: Namespace utilization
- **Concepts**: Export/import, namespace consumption
- **Implementation**: Teacher assignment and method calling

### Task 11: Brand Convention & Nominal Typing
- **Focus**: Type branding for enhanced type safety
- **Concepts**: Nominal typing, branded types, type distinction
- **Implementation**: MajorCredits and MinorCredits with unique branding

## 🚀 Getting Started

### Prerequisites
```bash
# Install Node.js and npm
npm install

# Install TypeScript globally (optional)
npm install -g typescript
```

### Running Individual Tasks

1. **Navigate to task directory**:
   ```bash
   cd task_0  # Replace with desired task number
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Development mode** (if available):
   ```bash
   npm run start-dev
   ```

### Configuration Files

Each task includes standard configuration files:

- **package.json**: Dependencies and build scripts
- **tsconfig.json**: TypeScript compiler configuration
- **webpack.config.js**: Module bundling configuration
- **.eslintrc.js**: Code linting rules (where applicable)

## 🔧 Build Process

The project uses Webpack for bundling and the TypeScript compiler for type checking. When running `npm run build`, the system should return "No type errors found" for successful compilation.

### Key Build Features:
- TypeScript transpilation
- Module bundling with Webpack
- Type checking and validation
- Development server support

## 📝 Code Examples

### Basic Interface (Task 0)
```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
```

### Advanced Interface with Index Signature (Task 1)
```typescript
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
```

### Nominal Typing (Task 11)
```typescript
interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}
```

## ✅ Validation

- **Type Safety**: All code must compile without TypeScript errors
- **Testing**: Jest framework for automated testing
- **Linting**: ESLint for code quality assurance
- **Build Success**: Webpack should bundle without errors

## 📚 Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Webpack Documentation](https://webpack.js.org/concepts/)

## 🤝 Contributing

When working on tasks:
1. Follow the TypeScript style guide
2. Ensure all types are properly defined
3. Test your implementations thoroughly
4. Maintain consistent file structure
5. Document complex implementations

## 📄 License

This project is part of a educational curriculum for learning TypeScript fundamentals and advanced concepts.