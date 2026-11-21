import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service.js';
import { CreateMaterialDto } from './dto/create.material.dto.js';
import { UpdateMaterialDto } from './dto/update.material.dto.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class MaterialService {
  constructor(private readonly prisma: PrismaService) {}

  getMaterials() {
    return this.prisma.material.findMany();
  }

  async getMaterial(materialId: number) {
    const material = await this.prisma.material.findUnique({
      where: {
        id: materialId,
      },
    });

    if (material === null) {
      throw new NotFoundException(`Материал с id ${materialId} не найден`);
    }

    return material;
  }

  createMaterial(materialDto: CreateMaterialDto) {
    return this.prisma.material.create({
      data: {
        text: materialDto.text,
      },
    });
  }

  async updateMaterial(materialId: number,materialDto: UpdateMaterialDto) {
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

  async deleteMaterial(materialId: number) {
    try {
      return await this.prisma.material.delete({
        where: {
          id: materialId,
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
}
