import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { CpuService } from './cpu.service';

@Module({
  imports: [PowerModule], //Use everything listed as an export from PowerModule
  providers: [CpuService],
  exports: [CpuService], //classes that can be used in other containers
})
export class CpuModule {}
