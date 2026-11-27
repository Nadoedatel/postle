import { PrismaService } from '../prisma.service.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicationService {
  constructor(private readonly prisma: PrismaService) {}

  getPublications(materialId: number) {
    return this.prisma.publication.findMany({
      where: {
        materialId,
      },
    });
  }
}
