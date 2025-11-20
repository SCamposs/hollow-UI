# 📦 NPM Publishing Guide - hollow-UI

This guide contains all necessary instructions to publish hollow-UI to NPM.

## 🚀 Prerequisites

1. **NPM Account**

   - Access [npmjs.com](https://www.npmjs.com) and create an account
   - Configure 2FA (recommended)

2. **Configured NPM CLI**

   ```bash
   npm whoami  # Check if logged in
   npm login   # Login if necessary
   ```

3. **Configuration verification**
   - ✅ `package.json` configured with `"private": false`
   - ✅ Unique name on NPM: `@scmposs/hollow-ui`
   - ✅ Correct version defined
   - ✅ Repository URL updated

## 🔧 Build Commands

### 1. Build Components

```bash
npm run build:package
```

This command will:

- Compile all TypeScript components
- Generate `.d.ts` files for typing
- Create ESM and CJS bundles
- Compile Tailwind CSS

### 2. Verify Build

```bash
# Verify if dist folder was created
ls -la dist/

# Verify if main files exist
ls -la dist/index.js dist/index.d.ts dist/styles.css
```

## 📋 Pre-Publication Checklist

- [ ] ✅ Test build: `npm run build:package`
- [ ] ✅ Test linting: `npm run lint`
- [ ] ✅ Verify version in `package.json`
- [ ] ✅ Verify `"private": false` in `package.json`
- [ ] ✅ README.md updated
- [ ] ✅ Commit and push changes
- [ ] ✅ Create version tag (optional)

## 🚀 Publication

### First Publication

```bash
# 1. Build
npm run build:package

# 2. Verify everything is correct
npm pack --dry-run

# 3. Publish
npm publish --access public
```

### Updates

```bash
# 1. Update version
npm version patch   # For bug fixes (1.0.0 -> 1.0.1)
npm version minor   # For new features (1.0.0 -> 1.1.0)
npm version major   # For breaking changes (1.0.0 -> 2.0.0)

# 2. Build and publish
npm run build:package
npm publish
```

## 🏗️ Build Structure

The build will generate the following files in the `dist/` folder:

```
dist/
├── index.js          # CommonJS Bundle
├── index.mjs         # ES Modules Bundle
├── index.d.ts        # TypeScript Declarations
└── styles.css        # Compiled Tailwind Styles
```

## 📝 Available Scripts

```json
{
  "build:components": "tsup",
  "build:cli": "tsup --config tsup.cli.config.ts && node scripts/post-build-cli.js",
  "build:css": "npx @tailwindcss/cli -i ./src/app/globals.css -o ./dist/styles.css --minify",
  "build:package": "npm run build:components && npm run build:cli && npm run build:css",
  "prepublishOnly": "npm run build:package"
}
```

## 🔍 Testing the Package Locally

### Before publishing, test locally:

1. **Local link**

   ```bash
   # In hollow-UI project
   npm link

   # In another test project
   npm link @scmposs/hollow-ui
   ```

2. **Pack and install**

   ```bash
   # Generate tarball
   npm pack

   # In another project
   npm install /path/to/hollow-ui-1.0.0.tgz
   ```

## 🌟 Post-Publication Usage Example

After published, other projects can use:

```bash
npm install @scmposs/hollow-ui
```

```tsx
import { Button, Card, Badge } from "@scmposs/hollow-ui";
import "@scmposs/hollow-ui/styles.css";

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>hollow-UI</Card.Title>
      </Card.Header>
      <Card.Content>
        <Button>It works!</Button>
        <Badge>v1.0.0</Badge>
      </Card.Content>
    </Card>
  );
}
```

## 🚨 Troubleshooting

### Error: Name already exists

```bash
# If @scmposs/hollow-ui already exists, use:
npm install -g npm-name-cli
npm-name @scmposs/hollow-ui-components
npm-name @scmposs/hollow-design-system
```

### Error: Not logged in

```bash
npm login
# Or if you have 2FA:
npm login --auth-type=web
```

### Error: Build fails

```bash
# Clean cache and reinstall
rm -rf node_modules dist
npm install
npm run build:package
```

## 📊 Monitoring

After publishing, monitor:

1. **NPM Stats**: https://npmjs.com/package/@scmposs/hollow-ui
2. **Downloads**: https://npm-stat.com/charts.html?package=@scmposs/hollow-ui
3. **Bundle Size**: https://bundlephobia.com/package/@scmposs/hollow-ui

## 🔄 Recommended Workflow

```bash
# 1. Make code changes
git add .
git commit -m "feat: add new component X"

# 2. Update version
npm version patch

# 3. Build and publish
npm run build:package
npm publish

# 4. Push with tags
git push origin main --tags
```

## 🔐 Ownership Transfer

### If you need to transfer package maintenance:

#### 1. Check current owners

```bash
npm owner ls @scmposs/hollow-ui
```

#### 2. Add new maintainer

```bash
npm owner add <username> @scmposs/hollow-ui
```

#### 3. Remove previous owner (optional)

```bash
npm owner rm <old-username> @scmposs/hollow-ui
```

#### 4. Transfer to organization

```bash
# Create organization on NPM (npmjs.com)
# Then:
npm access grant read-write hollow:developers @scmposs/hollow-ui
```

### Republish with new scope (if necessary)

If you lose access to the original package:

```bash
# 1. Update package.json
{
  "name": "@new-org/hollow-ui",
  "version": "1.0.0"
}

# 2. Publish as new package
npm publish --access public

# 3. Deprecate old package (if you still have access)
npm deprecate @scmposs/hollow-ui "Migrated to @new-org/hollow-ui"
```

## 📧 Support

If you encounter problems:

1. Check [official NPM documentation](https://docs.npmjs.com/)
2. NPM Support: support@npmjs.com
3. Ownership documentation: https://docs.npmjs.com/cli/owner

---

**Developed by Ítalo Soares Campos - hollow-UI**
