/*
 * elf JavaScript Library
 * 
 * create:
 * @2010-12-24 By mytharcher
 * 
 * update:
 */

///import js.dom.BoxModel;
///import js.util.Shortcut;

js.util.Shortcut.use(elf, {
	getPosition: js.dom.BoxModel.getPosition,
	isDisplaying: js.dom.BoxModel.isDisplaying,
	isViewable: js.dom.BoxModel.isViewable
});