import { Module } from '@nestjs/common';
import { SupportRequestController } from '../api/controller/support-request';
import { SupportRequestService } from '../api/service/support-request';
import { SupportRequestByIdPipe } from '../api/pipe/support-request-by-id';
import { SupportRequestBodyPipe } from '../api/pipe/support-request-body';

@Module({
  controllers: [SupportRequestController],
  providers: [SupportRequestService, SupportRequestByIdPipe, SupportRequestBodyPipe],
})

export class SupportRequestModule {}
