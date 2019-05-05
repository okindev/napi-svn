// test.js
const svn = require('.');
const urljoin = require('url-join');
const URL = "https://github.com/okindev/napi-svn/trunk";
const path = "./repo";

const options = {
    username: "user",
    password: "password",
    autoconnect: true,
    verbose: false
};

const log_options = {
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

results = svn.ls(URL, options);

results.forEach(element => {
    console.log(element);
});

console.log(svn.cat(urljoin(URL, "LICENSE"), options));

svn.log(log_options, (log) => {
    console.log(log);
}, options);

svn.checkout(URL, path, (action) => {
    console.log(action);
    // throw "test";
}, options);

svn.export(URL, path, (action) => {
    console.log(action);
}, options);