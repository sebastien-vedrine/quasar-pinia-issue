I would like to store prefetched data in a Pinia store.

I made a simple example to demonstrate the issue I encounter.

In this example I have 3 routes :
- Route1 uses the IndexPage component
- Route2 and Route3 both use the IndexPage2 component

When I refresh any of the 3 routes independently, I can retrieve the data from the store and display it in the template.

However, when I go from Route2 to Route3, the data can not be retrieved (same component).
Going from Route1 to either Route2 or Route3 works just fine and the data gets retrieved (different component).

N.B.: Going from Route2 to Route1 and then Route3 somehow works.

Edit: Same issue when I retrieve the store data in setup(), therefore it is not linked to preFetch().

You will find the result of the quasar info command below:
```
Operating System - Linux(4.19.0-18-amd64) - linux/x64
NodeJs - 14.19.0



Global packages
NPM - 6.14.16
yarn - 1.22.10
@quasar/cli - 1.3.1
@quasar/icongenie - Not installed
cordova - 10.0.0 (cordova-lib@10.1.0)



Important local packages
quasar - 2.7.1 -- Build high-performance VueJS user interfaces (SPA, PWA, SSR, Mobile and Desktop) in record time
@quasar/app-vite - 1.0.1 -- Quasar Framework App CLI with Vite
@quasar/extras - 1.14.0 -- Quasar Framework fonts, icons and animations
eslint-plugin-quasar - Not installed
vue - 3.2.37 -- The progressive JavaScript framework for building modern web UI.
vue-router - 4.0.16
pinia - 2.0.14 -- Intuitive, type safe and flexible Store for Vue
vuex - Not installed
vite - 2.9.1 -- Native-ESM powered web dev build tool
eslint - 8.17.0 -- An AST-based pattern checker for JavaScript.
electron - Not installed
electron-packager - Not installed
electron-builder - Not installed
register-service-worker - 1.7.2 -- Script for registering service worker, with hooks
@capacitor/core - Not installed
@capacitor/cli - Not installed
@capacitor/android - Not installed
@capacitor/ios - Not installed



Quasar App Extensions
*None installed*
```