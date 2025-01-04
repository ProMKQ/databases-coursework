import { ApiProperty } from '@nestjs/swagger';

export class SupportRequestResponse
{
  @ApiProperty({ description: 'Id of the support request' })
    id: string;

  @ApiProperty({ description: 'Topic of the support request' })
    topic: string;

  @ApiProperty({ description: 'Description of the support request' })
    description: string;
}
