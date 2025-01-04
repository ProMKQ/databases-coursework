import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../../validation-options-msg';

export class CreateSupportRequestAnswerDto
{
  @ApiProperty({ description: 'Content of the support request answer' })
  @IsString(validationOptionsMsg('Support request answer content must be a string'))
  @IsNotEmpty(validationOptionsMsg('Support request answer cannot have empty content'))
  feedback: string;

  @ApiProperty({ description: 'Id of the support request which the answer is to' })
  @IsUUID(null, validationOptionsMsg('Support request id must be a UUID'))
  supportRequestId: string;
}
