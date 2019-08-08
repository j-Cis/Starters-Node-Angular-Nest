# Starters-Node-Angular-Nest

----

```cmd
# Install
npm i
```
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
