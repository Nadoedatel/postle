import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateMaterialDto } from './dto/create.material.dto.js';

@Injectable()
export class MaterialService {
  constructor(private readonly prisma: PrismaService) {}

  getMany() {
    return this.prisma.material.findMany();
  }

  create(materialDto: CreateMaterialDto) {
    return this.prisma.material.create({
      data: {
        text: materialDto.text,
      },
    });
  }
}
