import { InfoService } from './info.service';
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    shuffling(textdata: string): Promise<any[]>;
    oddnumber(oddnumber: number[]): Promise<any[]>;
    countsmikey(textfile: string[]): Promise<number>;
}
