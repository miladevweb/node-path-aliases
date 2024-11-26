<br>

# <div align="center">Node Path Aliases</div>

### **_1. Create a package.json file_**

```bash
npm init --y
```

<br>

### **_2. Install Dependencies_**

In order to work with TypeScript, we need to install 4 packages:

```bash
npm install --save-dev typescript
npm install --save-dev ts-node-dev # for development like nodemon
npm install --save-dev tsconfig-paths # for resolving paths
```

or just run:

```bash
npm install --save-dev typescript ts-node-dev tsconfig-paths
```

And for Production, we need to install:

```bash
npm install --save module-alias # for aliasing
```

<br>

### **_3. Add Scripts to package.json_**

Add the following scripts to your package.json:

```json
"scripts": {
  "dev": "ts-node-dev -r tsconfig-paths/register src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

For development, we'll run the following command:

```bash
npm run dev
```

For production, we'll run the following commands:

```bash
npm run build
npm run start
```

<br>

### **_4. Create a tsconfig.json file_**

Run the following command:

```bash
npx tsc --init
```

Then, delete all the content from the file and replace it with this:

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022", // ES6 version or higher
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./dist", // Output directory
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "noImplicitAny": true,

    // Define your base directory
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@controllers/*": ["src/controllers/*"]
      // Add more paths here
    }
  },

  // These files will be included in the compilation
  "include": ["src/**/*"],

  // These files will not be compiled
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

> ### **_Add your files in src folder_**

<br>

### **_5. Environment Variables and Module Aliases_**

Create a .env file in the root directory, we'll add `development` or `production` value in `NODE_ENV` variable:

```bash
# .env
NODE_ENV=development
```

Now add `dotenv` to your dependencies:

```bash
npm install dotenv
```

<br>

In your package.json file, add the following:

```json
"_moduleAliases": {
  "@": "dist", // src/*
  "@controllers": "dist/controllers" // src/controllers/*
}
```

Add this line to your main file:

```typescript
// src/index.ts
if (process.env.NODE_ENV === 'production') require('module-alias/register')
```

> ### **_This last 2 steps will help us to work with aliases in production, but we need to change the `NODE_ENV` value to `production` in the .env file_**

Our project will look like this:

```typescript
// src/index.ts
import 'dotenv/config'
if (process.env.NODE_ENV === 'production') require('module-alias/register')

import { sum } from '@/utils/sum'
import { UserController } from '@controllers/user'

const result = sum(1, 2)
const user = new UserController()
```

<br>

## **_A project with `Express` and `TypeScript` will look like this:_**

Add dependencies:

```bash
# Dependencies
npm install express dotenv module-alias

# Dev dependencies
npm install --save-dev typescript ts-node-dev tsconfig-paths @types/node @types/express@4.17.21
```

At this time `Express` installs its types with version `5.0.0` by default, so we need to install the types for version `4.17.21`

### **_Main File:_**

```typescript
// src/index.ts
import 'dotenv/config'
import express from 'express
```
