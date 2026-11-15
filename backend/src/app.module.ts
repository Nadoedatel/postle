import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { MaterialController } from './material/material.controller.js';
import { MaterialService } from './material/material.service.js';

@Module({
  imports: [],
  controllers: [MaterialController],
  providers: [MaterialService, PrismaService],
})
export class AppModule {}
