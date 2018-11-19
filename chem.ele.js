let lzstr = require('lz-string');
const data = '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';
const dobj = JSON.parse(lzstr.decompressFromBase64(data));
let darr = [null];
for (let i in dobj) {
    darr[dobj[i].a] = dobj[i]
}
let map = [
    ['s', 'symbol', '代号'],
    ['e', 'ename', '英文名称'],
    ['g', 'group', '系'],
    ['a', 'atomic-number', '原子序数'],
    ['ec', 'electron-configuration', '电子层结构'],
    ['en', 'electronegativity', '电负性'],
    ['aw', 'atomic-weight', '原子质量'],
    ['bp', 'boiling-point', '沸点'],
    ['mp', 'melting-point', '融点'],
    ['c', 'cname', '中文名称'],
    ['p', 'cnamespell', '拼音'],
]
let groupMap = [
    ['other-nonmetal', 'on', '其他非金属'],
    ['noble-gas', 'ng', '惰性气体'],
    ['alkali-metal', 'am', '碱金属'],
    ['alkaline-earth-metal', 'aem', '碱土金属'],
    ['metalloid', 'm', '准金属'],
    ['halogen', 'h', '卤素'],
    ['post-transition-metal', 'ptm', '后过渡金属'],
    ['transition-metal', 'tm', '过渡金属'],
    ['lanthanide', 'l', '镧系'],
    ['actinide', 'a', '锕系']
]
let cnmap = map.map(ele => ele[2]);
let enmap = map.map(ele => ele[1]);
let cgmap = groupMap.map(ele=>ele[2]);
let egmap = groupMap.map(ele=>ele[0]);
module.exports = {
    e: function (ele) {
        let id, oobj;
        if (typeof ele === "number") {
            if (ele > 118 || ele < 1) {
                return null
            }
            let am = parseInt(ele);
            oobj = darr[am];
        } else if (typeof ele === 'string') {
            if (ele.length > 1) {
                let lid = ele.toLowerCase();
                id = lid.substr(0, 1).toUpperCase() + lid.substr(1);
            } else {
                id = ele.toUpperCase()
            }
            oobj = dobj[id];
        } else {
            return null
        }
        let obj = JSON.parse(JSON.stringify(oobj));
        let group = obj.g;
        obj.g = groupMap.find(ele => ele[1] === group)[0];
        let t = {};
        for (let i in obj) {
            let key = map.find(ele => ele[0] === i)[1];
            t[key] = obj[i]
        }
        t.get = function (e) {
            if (cnmap.includes(e)) {
                let key = map.find(ele => ele[2] === e)[1];
                return t[key]
            }
            if (enmap.includes(e)) {
                return t[e]
            }
            return null
        }
        return t
    },
    getAll: function (e) {
        let g =null;
        if (cgmap.includes(e)) {
             g= groupMap.find(ele => ele[2] === e)[1];
           
        }
        if (egmap.includes(e)) {
            g = groupMap.find(ele => ele[0] === e)[1];
           
        }
        if(g){
            return darr.filter(ele=>!!ele&&(ele.g===g))
        }
        return null
    }
}
