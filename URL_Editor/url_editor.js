// Simple URL Editor
class URLEditor {
    constructor(url) {
        this.url = new URL(url);
        this.params = this.url.searchParams;
    }

    check_params(params) {
        if (params != null) {
            if (params.constructor == Object) {
                console.log('OBJECT')
            } else if (params.constructor == Array) {
                console.log('ARRAY')
            } else {
                throw ({'FUE Error': 'Parameters must be an object or an array'});
            }
        } else {
            throw ({'FUE Error': 'Parameters could not be empty'});
        }
        return this.url;
    }

    // Add new params. Return new url.
    add_params(params) { 
        // Add params or replace
        for (const [key, value] of Object.entries(params)) {
            if (this.params.has(key)) {
                this.params.set(key, value);
            } else {
                this.params.append(key, value);
            }
        }
        return this.url;
    }

    // Edit params. Return new url.
    edit_params(params) {
        for (const [key, value] of Object.entries(params)) {
            if (this.params.has(key)) {
                this.params.set(key, value);
            } else {
                throw ({'FUE Error': `Parameter <${key}> not found`});
            }
        }
        return this.url;
    }

    // Remove params. Return new url.
    remove_params(params) { // list
        for (const key of params) {
            if (this.params.has(key)) {
                this.params.delete(key);
            } else {
                throw ({'FUE Error': `Parameter <${key}> not found`});
            }
            
        }
        return this.url;
    }
}


module.exports = { URLEditor };
