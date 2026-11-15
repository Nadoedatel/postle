import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';

@Injectable()
export class MaterialService {
  constructor(private readonly prisma: PrismaService) {}

  getMany() {
    return this.prisma.material.findMany();
  }
}
