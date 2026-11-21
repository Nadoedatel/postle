import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MaterialService } from './material.service.js';
import { CreateMaterialDto } from './dto/create.material.dto.js';
import { UpdateMaterialDto } from './dto/update.material.dto.js';

@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get()
  getMaterials() {
    return this.materialService.getMaterials();
  }

  @Get(':id')
  getMaterial(@Param('id', ParseIntPipe) id: number) {
    return this.materialService.getMaterial(id)
  }

  @Post()
  createMaterial(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialService.createMaterial(createMaterialDto);
  }

  @Put(':id')
  updateMaterial(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMaterialDto: UpdateMaterialDto
  ) {
    return this.materialService.updateMaterial(id, updateMaterialDto);
  }

  @Delete(':id')
  deleteMaterial(@Param('id', ParseIntPipe) id: number,) {
    return this.materialService.deleteMaterial(id);
  }
}
