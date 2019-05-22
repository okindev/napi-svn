napi-svn
========

[![npm][npm-version]][npm-url]
![size][github-repo-size]
![license][github-repo-license]
![downloads][npm-weekly-downloads]

A napi module that wraps subversion

<!-- TOC -->
- [Supported platforms](#supported-platforms)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [List files in repo](#list-files-in-repo)
    - [Display log history of repo](#display-log-history-of-repositiory)
    - [Display content of a file](#display-content-of-a-file)
    - [Checkout repo](#checkout-repository)
    - [Upgrade repo](#upgrade-repository)
    - [Export repo](#export-repository)
- [API](#api)
    - [ls(url[, options])](#lsurl-options)
    - [log(revision, callback[, options])](#logrevision-callback-options)
    - [cat(url[, options])](#caturl-options)
    - [checkout(url, path, callback[, options])](#checkouturl-path-callback-options)
    - [upgrade(path[, options])](#upgradepath-options)
    - [export(path, callback[, options])](#exportpath-callback-options)
    - [Options](#options)
    - [Revision](#revision)
- [License](#license)
<!-- /TOC -->

## Supported platforms

| OS           | Architecture   | Supported |
| :---         | :---:          | ---:    |
| Windows      | x64            | Yes       |
| Windows      | x86            | No        |
| Windows      | arm            | No        |
| Linux        | x64            | No        |
| Linux        | arm            | No        |
| MacOS        | N/A            | No        |

## Features

- SVN 1.10.2
- Authentication
- HTTP/HTTPS support
- Error handling
- NAPI
- No external dependencies

## Installation

```powershell
npm install napi-svn 
```
## Usage

#### List files in repo

```js
results = svn.ls(URL, options);
results.forEach(element => {
    console.log(element);
});
```

#### Display log history of repositiory

```js
const options = {
    username: "user",
    password: "password",
    autoconnect: true,
    verbose: false
};

const revision = {
    URI: [URL],
    revision_range: {
        start: {
            kind: svn.svn_opt_revision_number,
            value: 0
        },
        end: {
            kind: svn.svn_opt_revision_head,
        }
    }
};

svn.log(revision, (log) => {
    console.log(log);
}, options);
```

#### Display content of a file

```js
const options = {
    username: "user",
    password: "password",
    autoconnect: true,
    verbose: false
};

console.log(svn.cat(urljoin(URL, "LICENSE"), options));
```

#### Checkout repository

```js
const options = {
    username: "user",
    password: "password",
    autoconnect: true,
    verbose: false
};

svn.checkout(URL, path, (action) => {
    console.log(action);
}, options);
```

#### Upgrade repository

```js
const options = {
    username: "user",
    password: "password",
    autoconnect: true,
    verbose: false
};

svn.upgrade(path, options);
```

#### Export repository

```js
const options = {
    username: "user",
    password: "password",
    autoconnect: true,
    verbose: false
};

svn.export(URL, path, (action) => {
    console.log(action);
}, options);
```

## API

### ls(url[, options])

- `url` A string representing the URL for listing
- `options` [Options](#svn-options) authentication settings.
- Returns: <code>Array</code> of directory entries

List directory entries in the repository 

### log(revision, callback[, options])

- `revision` [Revision](#svn-revision) revision settings.
- `callback` Callback function with the method notification event.
- `options` [Options](#svn-options) authentication settings.
- Returns: <code>Undefined</code>

### cat(url[, options])]

- `url` A string representing the URL with the file path in the repository.
- `options` [Options](#svn-options) authentication settings.
- Returns: <code>String</code> with the contents of the file.

### checkout(url, path, callback[, options])]

- `url` A string representing the URL for the repository.
- `path` A string representing the local checkout path.
- `callback` Callback method with the method notification event.
- `options` [Options](#svn-options) authentication settings.
- Returns: <code>Undefined</code>

### upgrade(path[, options])]

- `path` A string representing the local repository path.
- `options` [Options](#svn-options) authentication settings.
- Returns: <code>Undefined</code>

### export(path, callback[, options])]

- `path` A string representing the local repository path.
- `callback` Callback method with the method notification event.
- `options` [Options](#svn-options) authentication settings.
- Returns: <code>Undefined</code>


<a id="svn-options"></a>
### Options

Repository authentication object

```js
{
    // These properties are the the standard svn command
    username: "user",      // login username 
    password: "password",  // login password
    autoconnect: false,    // auto accept certifcate 
    verbose: false // verbose logging setting
}
```

<a id="svn-revision"></a>
### Revision

Revision range object for the log command

```js
{
    URI: [URL],
    revision_range: {
        start: {
            kind: svn.svn_opt_revision_number,
            value: 0
        },
        end: {
            kind: svn.svn_opt_revision_head,
        }
    }
}
```

## License

MIT

[npm-url]:https://www.npmjs.com/package/napi-svn
[npm-version]:https://img.shields.io/npm/v/napi-svn.svg
[github-repo-size]:https://img.shields.io/github/repo-size/okindev/napi-svn.svg
[github-repo-license]:https://img.shields.io/github/license/okindev/napi-svn.svg
[npm-weekly-downloads]:https://img.shields.io/npm/dw/napi-svn.svg