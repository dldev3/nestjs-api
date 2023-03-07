import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    // url: 'postgresql://postgres:123@localhost:5432/nest-api?schema=public'
                    url: config.get('DATABASE_URL')
                }
            }
        });

        console.log(config.get('DATABASE_URL'));

    }
}


//1.34.15
