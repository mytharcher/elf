/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-19 By mytharcher
 * 
 * update:
 * @2011-01-10 By mytharcher
 * 		[m] Use 'g' instead 'get' method.
 */

///import js.dom.Stage;
///import js.util.Shortcut;

js.util.Shortcut.use(elf, {
	ready: js.dom.Stage.ready,
	g: js.dom.Stage.get,
	mark: js.dom.Stage.mark,
	getNextHighestDepth: js.dom.Stage.getNextHighestDepth,
	evalScript: js.dom.Stage.evalScript
});