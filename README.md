<br>

# <div align="center">Node Path Aliases</div>

### **_1. Create a package.json file_**

```bash
npm init --y
```

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

### **_3. Add Scripts to package.json_**

Add the following scripts to your package.json:

```json
  "scripts": {
    "dev": "ts-node-dev -r tsconfig-paths/register src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
```

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
