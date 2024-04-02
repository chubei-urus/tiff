import * as exif from './tags/exif';
import * as gps from './tags/gps';
import * as standard from './tags/standard';
const tags = {
    standard,
    exif,
    gps,
};
export default class IFD {
    constructor(kind) {
        if (!kind) {
            throw new Error('missing kind');
        }
        this.data = new Uint8Array();
        this.fields = new Map();
        this.kind = kind;
        this._hasMap = false;
        this._map = {};
    }
    get(tag) {
        if (typeof tag === 'number') {
            return this.fields.get(tag);
        }
        else if (typeof tag === 'string') {
            return this.fields.get(tags[this.kind].tagsByName[tag]);
        }
        else {
            throw new Error('expected a number or string');
        }
    }
    get map() {
        if (!this._hasMap) {
            const taglist = tags[this.kind].tagsById;
            for (const key of this.fields.keys()) {
                if (taglist[key]) {
                    this._map[taglist[key]] = this.fields.get(key);
                }
            }
            this._hasMap = true;
        }
        return this._map;
    }
}
//# sourceMappingURL=ifd.js.map