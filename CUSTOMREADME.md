1) npm i -g @nestjs/cli
2) nest new project-name
3) Delete
    If you wish
   - all staff inside ./src
   - ./test
   - ./eslintrc.js
   - ./.prettierrc
4) create main.ts inside ./src
5) create app.module.ts inside ./src
6) create app.controller.ts inside ./src
7) create app.service.ts inside ./src
8) npm install --save @nestjs/sequelize sequelize sequelize-typescript (ORM Sequelize for working with database)
9) npm install --save pg pg-hstore (There is for postgres, if you want to use another db please visit https://sequelize.org/docs/v6/getting-started/)
10) npm install --save-dev @types/sequelize (Types)
11) nest generate module name-of-module (can be implemented by yourself)
12) nest generate controller name-of-controller (can be implemented by yourself)
13) npm i @nestjs/config (for access to set configurations )
14) npm i cross-env (allows set system variables during starting the server)
26:34