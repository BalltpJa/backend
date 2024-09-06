import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { InfoController } from './info/info.controller';

@Global()
@Module({
  imports: [InfoModule],
  controllers: [],
  providers: [AppService],
  exports: [InfoModule]
})
export class AppModule { }
