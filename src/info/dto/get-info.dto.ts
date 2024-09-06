import { IsString, IsOptional } from 'class-validator';

export class GetInfoDto {
    @IsOptional()
    @IsString()
    textdata: string;
}