import * as alar from "../../src";
import config from "../app/config";
import define from "@hyurl/utils/define";

export const App = new alar.ModuleProxy("app", __dirname + "/../app");

define(global, "app", App);

(async () => {
    let _config = Object.assign({ secret: "abcdefg" }, config);
    var server = await App.serve(_config);

    server.register(app.service.user);

    app.service.user.instance().setName("Mr. Handsome");

    process.send("ready");
})();