import TiffIfd from './tiffIfd';
import { BufferType, DecodeOptions } from './types';
declare function decodeTIFF(data: BufferType, options?: DecodeOptions): TiffIfd[];
declare function isMultiPage(data: BufferType): boolean;
declare function pageCount(data: BufferType): number;
export { decodeTIFF as decode, isMultiPage, pageCount, DecodeOptions, TiffIfd };
