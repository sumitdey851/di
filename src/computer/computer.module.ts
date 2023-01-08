import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';

@Module({
  imports: [CpuModule, DiskModule], //Use everything listed as an export from CpuModule, DiskModule
  controllers: [ComputerController],
})
export class ComputerModule {}
