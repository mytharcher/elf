/*
 * elf JavaScript Library
 * 
 * create:
 * @2011-02-17 By mytharcher
 * 
 * update:
 */

///import js.dom.Cookie;
///import js.util.Shortcut;

js.util.Shortcut.use(elf, {
	getCookie: js.dom.Cookie.get,
	setCookie: js.dom.Cookie.set,
	removeCookie: js.dom.Cookie.remove
});