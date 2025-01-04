import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma';
import { SupportRequestModule } from './modules/support-request';
import { SupportRequestAnswerModule } from './modules/support-request-answer';

@Module({
  imports: [PrismaModule, SupportRequestModule, SupportRequestAnswerModule],
})

export class AppModule {}
