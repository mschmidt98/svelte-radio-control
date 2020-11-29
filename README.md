# Svelte, Typescript, SASS, Storybook, Webpack template

This project template was based on the [Svelte](https://svelte.dev) webpack template. It lives at https://github.com/sveltejs/template-webpack.

It was modified to include
- Typescript
- Sass
- Storybook

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit nitro52/svelte-typescript-sass-template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:4000](http://localhost:4000). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.

### Limitations
#### Typescript/Sass
Typescript and Sass support for `.svelte` files are added via the `svelte-preprocessor`. 
It requires using the `lang` or `type` attributes on the `style` and `script` elements. 
Within the script block this should work but inside `.svelte` files support varies based on the IDE you use. It may build but your IDE still shows errors 

Importing separate Typescript and Sass files should work fine. 

#### Aliases
Currently to use webpack style aliases during imports they need to be defined in `webpack.config', as a custom sass scssAliases to enable in sass and in tsconfig.json to enable importing in typescript

I'm currently looking for a way to share this logic but for now you must update aliases in `webpack.common.js` as well as `packages.json`

## Storybook
[Storybook](https://storybook.js.org/) has been setup to allow designing components in isolation. There are many Story book [addons](https://storybook.js.org/addons/) that can be added to extend the features

Run storybook with 

```bash
npm run storybook
```
Navigate to [localhost:4061](http://localhost:4060). You should see your component stories.

### Stories
Storybook is configured to load stories from the `stories` folder that end in `.stories.js` or `.stories.ts`

This project shows 2 button examples, one button uses scss within a svelte file, the other imports a scss file using the src attribute

### Removing Storybook
If you don't want storybook remove the following

**Folders**
- `.storybook`
- `stories`

**NPM Packages**
```
    "@storybook/addon-actions": "^5.2.4",
    "@storybook/addon-knobs": "^5.2.5",
    "@storybook/addon-links": "^5.2.4",
    "@storybook/addon-viewport": "^5.2.5",
    "@storybook/addons": "^5.2.4",
    "@storybook/preset-scss": "^1.0.2",
    "@storybook/preset-typescript": "^1.1.0",
    "@storybook/svelte": "^5.2.4",
    "react-docgen-typescript-loader": "^3.3.0",
```
Note - `react-docgen-typescript-loader` is a dependency of the @storybook/preset-typescript and will be removed in a future version

Lastly remove the `storybook` script from your `packages.json` `scripts` section
