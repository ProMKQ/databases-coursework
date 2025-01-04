import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SupportRequestAnswerByIdPipe } from '../pipe/support-request-answer-by-id';
import { SupportRequestAnswerService } from '../service/support-request-answer';
import { CreateSupportRequestAnswerDto } from '../dto/create-support-request-answer';
import { UpdateSupportRequestAnswerDto } from '../dto/update-support-request-answer';
import { SupportRequestAnswerResponse } from '../../responses/support-request-answer';

@ApiTags('Support Request Answer')
@Controller('/supportRequestAnswers')
export class SupportRequestAnswerController
{
  constructor (private readonly supportRequestAnswerService: SupportRequestAnswerService) {}

  @ApiOperation({
    summary: 'Get all support request answers',
    description: 'Endpoint for getting all support request answers',
  })
  @ApiOkResponse({
    type: [SupportRequestAnswerResponse],
  })
  @Get()
  getAll ()
  {
    return this.supportRequestAnswerService.getAll();
  }

  @ApiOperation({
    summary: 'Get support request answer by id',
    description: 'Endpoint for getting support request answers by id',
  })
  @ApiOkResponse({
    type: SupportRequestAnswerResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Support request answer with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the support request answer to get',
  })
  @Get('/:id')
  get (@Param('id', SupportRequestAnswerByIdPipe) id: string)
  {
    return this.supportRequestAnswerService.getById(id);
  }

  @ApiOperation({
    summary: 'Create support request answer',
    description: 'Endpoint for creating support request answers',
  })
  @ApiOkResponse({
    type: SupportRequestAnswerResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidBodyException:
      Support request id must be a UUID
      Support request answer content must be a string
      Support request answer cannot have empty content`,
  })
  @Post()
  create (@Body() body: CreateSupportRequestAnswerDto)
  {
    return this.supportRequestAnswerService.create(body);
  }

  @ApiOperation({
    summary: 'Update support request answer by id',
    description: 'Endpoint for updating support request answers by id',
  })
  @ApiOkResponse({
    type: SupportRequestAnswerResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Support request answer with such id was not found

    InvalidBodyException:
      Support request id must be a UUID
      Support request answer content must be a string
      Support request answer cannot have empty content`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the support request answer to update',
  })
  @Patch('/:id')
  update (
    @Param('id', SupportRequestAnswerByIdPipe) id: string,
    @Body() body: UpdateSupportRequestAnswerDto,
  )
  {
    return this.supportRequestAnswerService.updateById(id, body);
  }

  @ApiOperation({
    summary: 'Delete support request answer',
    description: 'Endpoint for deleting support request answers',
  })
  @ApiOkResponse({
    type: SupportRequestAnswerResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Support request answer with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the support request answer to delete',
  })
  @Delete('/:id')
  delete (@Param('id', SupportRequestAnswerByIdPipe) id: string)
  {
    return this.supportRequestAnswerService.deleteById(id);
  }
}
