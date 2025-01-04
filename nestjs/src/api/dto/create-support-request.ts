import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../../validation-options-msg';

export class CreateSupportRequestDto
{
  @ApiProperty({ description: 'Id of the user creating the support request' })
  @IsUUID(null, validationOptionsMsg('User id must be a UUID'))
  userId: string;

  @ApiProperty({ description: 'Topic of the support request' })
  @IsString(validationOptionsMsg('Support request topic must be a string'))
  @IsNotEmpty(validationOptionsMsg('Support request cannot have an empty topic'))
  topic: string;

  @ApiProperty({ description: 'Description of the support request' })
  @IsString(validationOptionsMsg('Support request description must be a string'))
  description: string;
}
