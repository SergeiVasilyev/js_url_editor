# JS URL Editor

Module for adding, editing and deleting URL parameters

## Installing
- Connect to HTML file

`<script src="URL_Editor/url_editor.js"></script>`

- Connect to another js file

`var { URLEditor } = require('../URL_Editor/url_editor.js');`

## Using

### Create obj

`let url = https://example.com?a=25&b=10`

`const url_obj = new URLEditor(url);`

### Methods

- ***add_params()*** - Add new parameters (Input: ***dict***, Return: ***URL()*** object)

`var new_url = url_obj.add_params({ c: '5', d: '35', a: '3' })`

- ***edit_params()*** - Edit parameters (Input: ***dict***, Return: ***URL()*** object)

`var new_url = url_obj.edit_params({ b: '13' })`

- ***remove_params()*** - Delete parameter (Input: ***list***, Return: ***URL()*** object)

`var new_url = url_obj.remove_params(['c'])`



