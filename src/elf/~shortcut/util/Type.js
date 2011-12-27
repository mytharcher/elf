/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-19 by mytharcher
 * 
 * update:
 */

///import js.util;
///import js.util.Type;
///import js.util.Shortcut;

js.util.Shortcut.use(elf, js.util.Type, function (key) {
	return ({extension: false, extend: false, of: false})[key];
});

js.util.Shortcut.use(elf, {typeOf: js.util.Type.of});
