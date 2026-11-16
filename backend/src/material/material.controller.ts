import { Body, Controller, Get, Post } from '@nestjs/common';
import { MaterialService } from './material.service.js';
import { CreateMaterialDto } from './dto/create.material.dto.js';

@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get('test')
  getManyTest() {
    return this.materialService.getMany();
  }

  @Get()
  getMany() {
    return this.materialService.getMany();
  }

  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialService.create(createMaterialDto);
  }
}
