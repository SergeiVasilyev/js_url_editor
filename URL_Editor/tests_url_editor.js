var { URLEditor } = require('./url_editor.js');
var test = require('node:test');
var assert = require('assert');


let url = 'https://jsonplaceholder.typicode.com/todos/1?a=25&b=10';

// https://futurestud.io/tutorials/javascript-how-to-convert-urlsearchparams-to-object
function get_obj_from_parameters(parameters) {
    return Object.fromEntries(  // Make object from parameters string
        new URLSearchParams(parameters)
    )
}

test('Add new params to url', (t) => {
    const url_obj = new URLEditor(url);
    var test_params = {a: '3', b: '10', c: '5', d: '35'}
    assert.deepStrictEqual(test_params, get_obj_from_parameters(url_obj.add_params({ c: '5', d: '35', a: '3' }).searchParams.toString()));
});

test('Edit params in url', (t) => {
    const url_obj = new URLEditor(url);
    var test_params = {a: '25', b: '13'}
    assert.deepStrictEqual(test_params, get_obj_from_parameters(url_obj.edit_params({ b: '13' }).searchParams.toString()));
});

test('Remove params from url', (t) => {
    const url_obj = new URLEditor(url);
    var test_params = {b: '10'}
    assert.deepStrictEqual(test_params, get_obj_from_parameters(url_obj.remove_params(['a']).searchParams.toString()));
})