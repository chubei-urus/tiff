import TIFFDecoder from './tiffDecoder';
import TiffIfd from './tiffIfd';
function decodeTIFF(data, options) {
    const decoder = new TIFFDecoder(data);
    return decoder.decode(options);
}
function isMultiPage(data) {
    const decoder = new TIFFDecoder(data);
    return decoder.isMultiPage;
}
function pageCount(data) {
    const decoder = new TIFFDecoder(data);
    return decoder.pageCount;
}
export { decodeTIFF as decode, isMultiPage, pageCount, TiffIfd };
//# sourceMappingURL=index.js.map