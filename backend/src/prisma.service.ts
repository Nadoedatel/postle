import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const connectionString = process.env['DATABASE_URL'];

    if (!connectionString) {
      throw new Error('Переменная DATABASE_URL не задана. Проверь backend/.env.');
    }

    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }
}
