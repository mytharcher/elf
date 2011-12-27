/*
 * elf JavaScript Library
 * 
 * create: 
 * @2010-12-10 by mytharcher
 * 
 * update:
 */

///import js.util.Shortcut;
///import js.util.Type;
///import js.util.XArray;

/**
 * @ignore
 * 给快捷处理添加转化为扩展数组的处理方式
 */
js.util.Shortcut.intercept(elf, js.util.Type.ARRAY, js.util.XArray.toXArray);