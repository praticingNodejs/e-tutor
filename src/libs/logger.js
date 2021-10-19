import { Console } from 'console';
import moment from 'moment';
import path from 'path';
import chalk from 'chalk';

class Logger extends Console {
    constructor({ file, formatTz }) {
        super({ stdout: process.stdout, stderr: process.stderr });

        this.scope = Logger.parsePathToScope(file || 'APP'); // neu khong co scope thi ma dinh se la 'APP'
        this.formatTz = formatTz || 'MMM DD, yyy -HH:mm:ss';
    }

    static parsePathToScope(filepath) {
        const pathSep = path.sep;
        const existPatchSep = filepath.indexOf(pathSep) !== -1;
        const newFilepath = existPatchSep
            ? filepath
                  .replace(process.cwd(), '') // cwd: dan toi thu muc chinh
                  .replace(`${pathSep}src${pathSep}`, '')
                  .replace(/.{js|ts}/, '')
            : filepath;
        return newFilepath;
    }

    info(msg) {
        this._formatMsg(msg, 'cyan');
    }

    success(msg) {
        this._formatMsg(msg, 'green');
    }

    error(msg) {
        this._formatMsg(msg, 'red');
    }

    warn(msg) {
        this._formatMsg(msg, 'yellow');
    }

    _formatScope() {
        const scope = chalk.green([`[${this.scope}]`]);
        const tz = chalk.cyan([`[${this.getTimestamp()}]`]);
        return `${scope}${tz}`;
    }

    _formatMsg(msg, color = 'grey') {
        const fmsg = `${this._formatScope()} - ${chalk[color](msg)}`;

        super.log(fmsg);
    }

    getTimestamp() {
        return moment().format(this.formatTz);
    }
}

export default Logger;
