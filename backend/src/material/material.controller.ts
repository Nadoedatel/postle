import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { MaterialService } from './material.service.js';
import { CreateMaterialDto } from './dto/create.material.dto.js';
import { UpdateMaterialDto } from './dto/update.material.dto.js';

@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get('test')
  getManyTest() {
    return this.materialService.getMany();
  }

  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialService.create(createMaterialDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMaterialDto: UpdateMaterialDto
  ) {
    return this.materialService.update(id, updateMaterialDto);
  }

  @Delete(':id')
  delete(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.materialService.delete(id);
  }
}
