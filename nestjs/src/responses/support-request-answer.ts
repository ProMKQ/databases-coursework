import { ApiProperty } from '@nestjs/swagger';

export class SupportRequestAnswerResponse
{
  @ApiProperty({ description: 'Content of the support request answer' })
  feedback: string;

  @ApiProperty({ description: 'Id of the support request which the answer is to' })
  supportRequestId: string;
}
