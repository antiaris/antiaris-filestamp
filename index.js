/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-06-16[16:08:31]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const Numbase = require('numbase');

const base = new Numbase();

const getDigest = content => {
    let digest = crypto.createHash('md5').update(content).digest('hex');
    digest = (parseInt(digest, 16) % 1e10).toString(16);
    return base.encode(base.decode(digest, 16));
}

const rename = (filename, stamp) => {
    const ext = path.extname(filename);
    return `${stamp}${ext}`;
};

const filestamp = exports.filestamp = (filename, cb) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
        if (err) {
            cb(err);
        } else {
            const stamp = getDigest(content);
            cb(null, {
                filename: rename(filename, stamp)
            });
        }
    });
};

filestamp.sync = filename => {
    const content = fs.readFileSync(filename, 'utf-8');
    const stamp = getDigest(content);
    return {
        filename: rename(filename, stamp)
    };
};

const contentstamp = exports.contentstamp = (content, filename, cb) => {
    const stamp = getDigest(content);
    cb(null, {
        filename: rename(filename, stamp)
    });
};

contentstamp.sync = (content, filename) => {
    const stamp = getDigest(content);
    return {
        filename: rename(filename, stamp)
    };
};