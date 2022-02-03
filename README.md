# whoobe-one-sveltekit

An alpha project based on SvelteKit that creates a static website using a project exported by [whoobe-one-studio](https://github.com/swina/whoobe-one-studio).

## Demo 

[A simple demo](https://whoobe-one-sveltekit.vercel.app/)

## Install

Clone the repo

``` 
npm install

``` 
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Importing a whoobe-one-studio project

**whoobe-one-studio** website project are available using the branch **feature-create-website**

From whoobe-one-studio create a website project, add your components or pages and export the project in 

```
./lib/pages/whoobe.js
```

The project will automatically create your website. 
At the moment GSAP animations are not supported.

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploying

> By default the project build a full static website
> To deploy your app copy the build folder to your hosting server
