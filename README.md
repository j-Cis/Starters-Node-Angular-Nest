# Starters-Node-Angular-Nest

----
## TO DO:
- the target structure
    ```
    .
    ├── [dist]
    │    ├── [client]
    │    ├── [server]
    │    └── [shared]
    ├── [src]
    │    ├── [client]
    │    ├── [server]
    │    └── [shared]
    ├── webpack.dev.config.js
    ├── webpack.prod.config.js
    ├── webpack.watch.config.js
    ├── package.json
    ├── tsconfig.json
    └── README.md
    ```
-  server Nest with Angular and handling SQLite, and build gui frame nw / elecetron

## ON THIS MOMENT
- npm run build - to build nest-static and angular separately.
- npm run start
----

### A-nest-webpack (very simple solution) [GO2SRC](https://github.com/CisSasGot/Starters-Node-Angular-Nest/tree/master/packages/A-nest-webpack)
:beers: this is working and is modifed from https://github.com/nestjs/nest/tree/master/sample/08-webpack
```JSON
"scripts": {
    "A_build": "concurrently \"rimraf ./packages/A-nest-webpack/dist/*\" \"webpack --config packages/A-nest-webpack/webpack.config.js\"",
    "A_dev": "concurrently \"rimraf ./packages/A-nest-webpack/dist/*\" \"webpack --config packages/A-nest-webpack/webpack.config.js --watch\"",
    "A_start": "concurrently \"node ./packages/A-nest-webpack/dist/server\" \"open-cli http://localhost:3000/\"",
    "A_COMBO_build_and_start": "concurrently \"npm run A_build\" \"npm run A_start\"",
    "A_COMBO_dev_and_start": "concurrently \"npm run A_dev\" \"npm run A_start\""
},
```
----

### B-nest-sqlite [GO2SRC](https://github.com/CisSasGot/Starters-Node-Angular-Nest/tree/master/packages/B-nest-sqlite)
:angry: this is not working and is modifed from https://github.com/kentrino/typeorm-sqlite-example and https://github.com/nestjs/nest/tree/master/sample/05-sql-typeorm
```JSON
"scripts": {
    "B_build": "concurrently \"rimraf ./packages/B-nest-sqlite/dist/*\" \"rimraf ./packages/B-nest-sqlite/data/*\"  \"tsc -p packages/B-nest-sqlite/tsconfig.build.json\"",
    "B_dev": "concurrently \"rimraf ./packages/B-nest-sqlite/dist/*\" \"rimraf ./packages/B-nest-sqlite/data/*\"  \"ts-node packages/B-nest-sqlite/src/main\"",
    "B_prestart_dev": "ts-node packages/B-nest-sqlite/src/main",
    "B_prestart_build": "node packages/B-nest-sqlite/dist/main.js",
    "B_start": "open-cli http://localhost:3001/"
},
```
----
### C-nest-static [GO2SRC](https://github.com/CisSasGot/Starters-Node-Angular-Nest/tree/master/packages/C-nest-static)
:beers: this is working and is from https://github.com/nestjs/nest/tree/master/sample/24-serve-static

```JSON
"scripts": {
    "C_build": "concurrently \"rimraf ./packages/C-nest-static/dist/*\"  \"tsc -p packages/C-nest-static/tsconfig.build.json\"",
    "C_start": "concurrently \"open-cli http://localhost:3000/\"  \"node packages/C-nest-static/dist/main.js\"",
    "C_COMBO_dev": "concurrently \"rimraf ./packages/C-nest-static/dist/*\" \"open-cli http://localhost:3000/\" \"ts-node -p packages/C-nest-static/src/main\" "
},
```
----
----
### D-webpack-nest-angular-static [GO2SRC](https://github.com/CisSasGot/Starters-Node-Angular-Nest/tree/master/packages/D-webpack-nest-angular-static)
this is working ony client and  is from https://angular-guru.com/blog/angular-webpack

```JSON
"scripts": {
    "D_build_client_dev_cli": "ng build",
    "D_build_client_prod_cli": "ng build --prod",
    "D_build_clean_dev": "rimraf ./packages/D-webpack-nest-angular-static/build/dev/*",
    "D_build_clean_prod": "rimraf ./packages/D-webpack-nest-angular-static/build/dev/*",
    "D_build_client_prod_webpack": "webpack --config packages/D-webpack-nest-angular-static/client/webpack.production.config.js",
    "D_build_client_dev_webpack": "webpack --config packages/D-webpack-nest-angular-static/client/webpack.config.js",
    "noD_build_server_dev_webpack": "webpack --config packages/D-webpack-nest-angular-static/server/webpack.config.js",
    "noD_build_prestart_dev": "node packages/D-webpack-nest-angular-static/build/dev/server.js",
    "noD_build_start_dev": "open-cli http://localhost:3000/"
},
```
----
