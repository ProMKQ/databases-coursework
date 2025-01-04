import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../../validation-options-msg';

export class UpdateSupportRequestDto
{
  @ApiPropertyOptional({ description: 'Id of the user creating the support request' })
  @IsOptional()
  @IsUUID(null, validationOptionsMsg('User id must be a UUID'))
  userId?: string;

  @ApiPropertyOptional({ description: 'Topic of the support request' })
  @IsOptional()
  @IsString(validationOptionsMsg('Support request topic must be a string'))
  @IsNotEmpty(validationOptionsMsg('Support request cannot have an empty topic'))
  topic?: string;

  @ApiPropertyOptional({ description: 'Description of the support request' })
  @IsOptional()
  @IsString(validationOptionsMsg('Support request description must be a string'))
  description?: string;
}
