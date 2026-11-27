import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PublicationService } from './publication.service.js';

@Controller('materials/:materialId/publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Get()
  getPublications(@Param('materialId', ParseIntPipe) materialId: number) {
    return this.publicationService.getPublications(materialId);
  }
}
