/*
 * elf JavaScript Library
 * 
 * create: 
 * @2010-12-19 by mytharcher
 * 
 * update:
 */

///import js.util;
///import js.util.Class;
///import js.util.Shortcut;

js.util.Shortcut.use(elf, js.util.Class, function (key) {
	return key != 'create';
});

elf().Class = js.util.Class.create;