import { Controller, Get } from '@nestjs/common';
import { MaterialService } from './material.service.js';

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
}
