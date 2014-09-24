/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-24 By mytharcher
 * 
 * update:
 */

///import js.dom.Event;
///import js.util.Shortcut;

js.util.Shortcut.use(elf, {
	addEventListener: js.dom.Event.add,
	removeEventListener: js.dom.Event.remove,
	on: js.dom.Event.add,
	off: js.dom.Event.remove,
	un: js.dom.Event.remove
});