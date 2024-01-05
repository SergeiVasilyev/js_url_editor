var { URLEditor } = require('./url_editor.js');
var test = require('node:test');
var assert = require('assert');


let url = 'https://jsonplaceholder.typicode.com/todos/1?a=25&b=10';

// https://futurestud.io/tutorials/javascript-how-to-convert-urlsearchparams-to-object
function get_obj_from_parameters(parameters) {
    // Make object from parameters string
    return Object.fromEntries(  
        new URLSearchParams(parameters)
    )
}

// Parameters test
test('Add new params to url', (t) => {
    const url_obj = new URLEditor(url);
    var test_params = {a: '3', b: '10', c: '5', d: '35'}
    // 1. Adding new parameters and editing exsiting parameters
    assert.deepStrictEqual(get_obj_from_parameters(url_obj.add_params({ c: '5', d: '35', a: '3' }).searchParams.toString()), test_params);
    // 2. test for mismatch between expected and returned values
    assert.notDeepStrictEqual(get_obj_from_parameters(url_obj.add_params({ c: '5', d: '35', a: '110' }).searchParams.toString()), test_params);
});

test('Edit params in url', (t) => {
    const url_obj = new URLEditor(url);
    // 1. Edit exsit parameter
    var test_params = {a: '25', b: '13'}
    assert.deepStrictEqual(get_obj_from_parameters(url_obj.edit_params({ b: '13' }).searchParams.toString()), test_params);
    // 2. Trying to edit undefined parameter return Error
    const test_error = () => get_obj_from_parameters(url_obj.edit_params({ c: '13' }).searchParams.toString());
    assert.throws(test_error, { 'FUE Error': 'Parameter <c> not found' });
});

test('Remove params from url', (t) => {
    const url_obj = new URLEditor(url);
    var test_params = {b: '10'}
    // 1. Deleting existing parameter
    assert.deepStrictEqual(get_obj_from_parameters(url_obj.remove_params(['a']).searchParams.toString()), test_params);
    // 2. If parameter does not exsist in url
    const test_error = () => get_obj_from_parameters(url_obj.remove_params(['c']).searchParams.toString());
    assert.throws(test_error, { 'FUE Error': 'Parameter <c> not found' });
})

