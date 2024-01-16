/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * ts_deno_cn2tw/test/index.ts
 */

import { convert } from '../index.ts';
import { assert } from 'https://deno.land/std@0.211.0/assert/mod.ts';

(() => {
	const FILE_MODE_ALL = { mode: 0o777 };

	const SOURCE_FILENAME = 'zh_cn.txt';
	Deno.writeTextFileSync(
		SOURCE_FILENAME,
		'干，天干，今天干燥，如今天干燥热，假如今天干燥热晕了',
		FILE_MODE_ALL,
	);

	const GOAL_FILENAME = 'zh_tw.txt';
	console.log(convert(SOURCE_FILENAME, GOAL_FILENAME));

	assert(
		Deno.readTextFileSync(GOAL_FILENAME) === '乾，天乾，今天乾燥，如今天乾燥熱，假如今天乾燥熱暈了',
	);
})();
