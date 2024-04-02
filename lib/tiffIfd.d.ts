import Ifd from './ifd';
export default class TiffIfd extends Ifd {
    constructor();
    get size(): number;
    get width(): number;
    get height(): number;
    get components(): number;
    get date(): Date;
    get newSubfileType(): number;
    get imageWidth(): number;
    get imageLength(): number;
    get bitsPerSample(): number;
    get alpha(): boolean;
    get associatedAlpha(): boolean;
    get extraSamples(): number[] | undefined;
    get compression(): number;
    get type(): number;
    get fillOrder(): number;
    get documentName(): string | undefined;
    get imageDescription(): string | undefined;
    get stripOffsets(): number[];
    get orientation(): number;
    get samplesPerPixel(): number;
    get rowsPerStrip(): number;
    get stripByteCounts(): number[];
    get minSampleValue(): number;
    get maxSampleValue(): number;
    get xResolution(): number;
    get yResolution(): number;
    get planarConfiguration(): number;
    get resolutionUnit(): number;
    get dateTime(): string;
    get predictor(): number;
    get sampleFormat(): number;
    get sMinSampleValue(): number;
    get sMaxSampleValue(): number;
    get palette(): Array<[number, number, number]> | undefined;
}
