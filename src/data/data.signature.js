/**
 * Class representing DataSignature
 * @class DataSignature
 */
class DataSignature {

    /**
     * creates new DataSignature object
     * @param {string} key
     * @param {function} importModule
     */
    constructor(key, importModule) {
        this.key = (typeof key === 'string')
            ? key
            : null;

        this.importModule = (this.key && typeof importModule === 'function')
            ? importModule
            : null;
    }

}

export {
    DataSignature,
};