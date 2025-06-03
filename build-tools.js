// 代碼混淆示例工具
// 可以使用 JavaScript Obfuscator

// 安裝： npm install javascript-obfuscator --save-dev

const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

// 原始代碼
const originalCode = fs.readFileSync('script.js', 'utf8');

// 混淆設定
const obfuscationOptions = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: true,
    debugProtectionInterval: true,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: 0.75,
    transformObjectKeys: true,
    unicodeEscapeSequence: false
};

// 執行混淆
const obfuscatedCode = JavaScriptObfuscator.obfuscate(originalCode, obfuscationOptions);

// 儲存混淆後的代碼
fs.writeFileSync('script.min.js', obfuscatedCode.getObfuscatedCode());

console.log('代碼混淆完成！'); 