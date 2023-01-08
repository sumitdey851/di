import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiskService } from './disk.service';

@Module({
  imports: [PowerModule], //Use everything listed as an export from PowerModule
  providers: [DiskService],
  exports: [DiskService], //classes that can be used in other containers
})
export class DiskModule {}
