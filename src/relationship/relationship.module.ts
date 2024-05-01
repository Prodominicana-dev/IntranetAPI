import { Module } from '@nestjs/common';
import { RelationshipController } from './relationship.controller';
import { RelationshipService } from './relationship.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RelationshipController],
  providers: [RelationshipService, PrismaService]
})
export class RelationshipModule {}
