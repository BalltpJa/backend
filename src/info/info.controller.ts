import { Body, Controller, Get, Param } from '@nestjs/common';
import { InfoService } from './info.service';



@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) { }

  @Get('/shuffling/:textdata')
  async shuffling(@Param('textdata') textdata: string) {
    return this.infoService.shuffling(textdata)
  }


  @Get('/oddnumber')
  async oddnumber(@Body() oddnumber: number[]) {
    return this.infoService.oddnumber(oddnumber)
  }

  @Get('/countsmikey')
  async countsmikey(@Body() textfile: string[]) {
    return this.infoService.countsmikey(textfile)
  }

}
