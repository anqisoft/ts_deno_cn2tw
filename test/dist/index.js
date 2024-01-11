"use strict";
/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * ts_deno_cn2tw/test/index.ts
*/
exports.__esModule = true;
var index_ts_1 = require("../index.ts");
var mod_ts_1 = require("https://deno.land/std@0.211.0/assert/mod.ts");
(function () {
    var FILE_WRITE_MODE = { mode: 511 };
    var SOURCE_FILENAME = 'zh_cn.txt';
    Deno.writeTextFileSync(SOURCE_FILENAME, '干，天干，今天干燥，如今天干燥热，假如今天干燥热晕了', FILE_WRITE_MODE);
    var GOAL_FILENAME = 'zh_tw.txt';
    console.log(index_ts_1.convert(SOURCE_FILENAME, GOAL_FILENAME));
    mod_ts_1.assert(Deno.readTextFileSync(GOAL_FILENAME) === '乾，天乾，今天乾燥，如今天乾燥熱，假如今天乾燥熱暈了');
})();
