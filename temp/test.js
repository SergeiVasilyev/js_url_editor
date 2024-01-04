import { URLEditor } from '../URL_Editor/url_editor.js';

// Main block
let url = 'https://jsonplaceholder.typicode.com/todos/1?a=25&b=10';
let params = { c: 5, d: 35, a: 3 };
let del_params = ['s'];
const MyFunc = () => { return 'test'; };

const url_params = new URLEditor(url);
try {
    console.log(url_params.add_params([MyFunc]).href);
    console.log(decodeURIComponent(url_params.add_params([MyFunc]).href));
    console.log(url_params.add_params([MyFunc]).searchParams);
} catch (error) {
    console.log(error);
}