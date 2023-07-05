"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = require("./socket");
const config_1 = require("./config");
require("./client");
socket_1.server.listen(config_1.PORT, () => {
    console.log('🏃 Server is runing in the port ' + config_1.PORT);
});