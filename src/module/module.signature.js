import { DependencyManager } from './module.dependency';

/**
 * Class representing ModuleSignature
 */
class ModuleSignature {

    /**
     * creates new ModuleSignature object
     * @param {string} name - Module name
     * @param {string|null} selector
     */
    constructor(name, selector = null) {
        this.name = (
            name && typeof name === 'string'
        )
            ? name
            : null;

        this.selector = (
            selector &&
            typeof selector === 'string'
        )
            ? selector
            : null;

        this.importController = null;
        this.importStyles = null;
        this.elements = new Set();
        this.isLazy = true;

        this.dependencyManager = new DependencyManager();

    }

    /**
     * set controller selector
     * @param {string} selector - selector for document.querySelectorAll()
     * @example new ModuleSignature('example').setSelector('.example-class-selector')
     * @return {ModuleSignature}
     */
    setSelector(selector) {
        this.selector = (
            selector &&
            typeof selector === 'string'
        )
            ? selector
            : null;

        return this;
    }


    /**
     * get defined selector
     * @return {string|null}
     */
    getSelector() {
        return this.selector;
    }

    /**
     * set controller import
     * @param {function} controller
     * @example
     * new ModuleSignature('example')
     *  .setImportController(() => import('./example.controller'));
     * @return {AbstractController}
     */
    setImportController(controller) {
        this.importController = (typeof controller === 'function')
            ? controller
            : null;

        return this;
    }

    /**
     * get controller import method
     * @return {function|null}
     */
    getImportController() {
        return this.importController;
    }

    /**
     * set styles import
     * @param {function} styles
     * @return {ModuleSignature}
     */
    setImportStyles(styles) {
        this.importStyles = (typeof styles === 'function')
            ? styles
            : null;

        return this;
    }

    /**
     * get styles import method
     * @return {function|null}
     */
    getImportStyles() {
        return this.importStyles;
    }

    /**
     * add element signature
     * @param {ElementSignature} elementSignature
     * @return {ModuleSignature}
     */
    addElementSignature(elementSignature) {
        this.elements.add(elementSignature);
        return this;
    }

    /**
     * get elements signatures
     * @return {Set} - set of ElementSignature
     */
    getElementSignatures() {
        return this.elements;
    }

    /**
     * add dependencies
     * @param {string} key
     * @param {function} module
     * @return {ModuleSignature}
     */
    addDependency(key, module) {
        this.dependencyManager.add(key, module);
        return this;
    }

    /**
     * loads this module at the start
     * and does not wait until the intersection
     * observer found the element
     *
     * @return {ModuleSignature}
     */
    disableLazy() {
        this.isLazy = false;
        return this;
    }

}

export {
    ModuleSignature,
};