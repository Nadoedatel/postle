import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { MaterialController } from './material/material.controller.js';
import { MaterialService } from './material/material.service.js';
import { PublicationController } from './publication/publication.controller.js';
import { PublicationService } from './publication/publication.service.js';

@Module({
  imports: [],
  controllers: [MaterialController, PublicationController],
  providers: [MaterialService, PublicationService, PrismaService],
})
export class AppModule {}
