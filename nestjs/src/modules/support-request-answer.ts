import { Module } from '@nestjs/common';
import { SupportRequestAnswerController } from '../api/controller/support-request-answer';
import { SupportRequestAnswerService } from '../api/service/support-request-answer';
import { SupportRequestAnswerByIdPipe } from '../api/pipe/support-request-answer-by-id';

@Module({
  controllers: [SupportRequestAnswerController],
  providers: [SupportRequestAnswerService, SupportRequestAnswerByIdPipe],
})

export class SupportRequestAnswerModule {}
