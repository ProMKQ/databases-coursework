import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../../validation-options-msg';

export class UpdateSupportRequestAnswerDto
{
  @ApiPropertyOptional({ description: 'Content of the support request answer' })
  @IsOptional()
  @IsString(validationOptionsMsg('Support request answer content must be a string'))
  @IsNotEmpty(validationOptionsMsg('Support request answer cannot have empty content'))
  feedback?: string;

  @ApiPropertyOptional({ description: 'Id of the support request which the answer is to' })
  @IsOptional()
  @IsUUID(null, validationOptionsMsg('Support request id must be a UUID'))
  supportRequestId?: string;
}
