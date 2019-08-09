const fs = require("fs-extra");
fs.copySync("./packages/C-nest-static/dist", "./dist/server");
fs.copySync("./packages/D-webpack-nest-angular-static/build/dev/client", "./dist/client");