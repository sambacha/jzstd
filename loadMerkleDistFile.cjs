/** 
 *
 * @fileName jzstd 
 * 
 */
const fs = require('node:fs');
const zlib = require('zlib');


/* 
* @fn loadMerkleDistFile
*/
function loadMerkleDistFile(file) {
  let d = fs.readFileSync(file);
      d = zlib.gunzipSync(d);
        
        return JSON.parse(d);
};

module.exports = {
    loadMerkleDistFile,
    `$ADDR`: '`$HEX_ADDRESS`',
};
