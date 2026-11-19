import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateMaterialDto } from './dto/create.material.dto.js';
import { UpdateMaterialDto } from './dto/update.material.dto.js';
import { Prisma } from '../generated/prisma/client.js';

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

  async update(materialId: number,materialDto: UpdateMaterialDto) {
    try {
       return await this.prisma.material.update({
        where: {
          id: materialId,
        },
        data: {
          text: materialDto.text,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Не нашли этот id – ${materialId}`);
      }

      throw error;
    }
  }

  delete(materialId: number) {
    return this.prisma.material.delete({
      where: {
        id: materialId,
      },
    });
  }
}
