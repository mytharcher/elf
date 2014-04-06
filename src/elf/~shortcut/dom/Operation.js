///import js.dom.Operation;

js.util.Shortcut.use(elf, {
	createElement: js.dom.Operation.create,
	insertAt: js.dom.Operation.insert,
	insertBefore: js.dom.Operation.insertBefore,
	insertAfter: js.dom.Operation.insertAfter,
	append: js.dom.Operation.append,
	removeElement: js.dom.Operation.remove,
	emptyElement: js.dom.Operation.empty,
	html: js.dom.Operation.html,
	text: js.dom.Operation.text,
});