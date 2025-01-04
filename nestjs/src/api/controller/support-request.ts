import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SupportRequestService } from '../service/support-request';
import { SupportRequestResponse } from '../../responses/support-request';
import { SupportRequestByIdPipe } from '../pipe/support-request-by-id';
import { UpdateSupportRequestDto } from '../dto/update-support-request';
import { CreateSupportRequestDto } from '../dto/create-support-request';
import { SupportRequestBodyPipe } from '../pipe/support-request-body';

@ApiTags('Support Request')
@Controller('/supportRequests')
export class SupportRequestController
{
  constructor (private readonly supportRequestService: SupportRequestService) {}

  @ApiOperation({
    summary: 'Get all support requests',
    description: 'Endpoint for getting all support requests',
  })
  @ApiOkResponse({
    type: [SupportRequestResponse],
  })
  @Get()
  getAll ()
  {
    return this.supportRequestService.getAll();
  }

  @ApiOperation({
    summary: 'Get support request by id',
    description: 'Endpoint for getting support requests by id',
  })
  @ApiOkResponse({
    type: SupportRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Support request with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the support request to get',
  })
  @Get('/:id')
  get (@Param('id', SupportRequestByIdPipe) id: string)
  {
    return this.supportRequestService.getById(id);
  }

  @ApiOperation({
    summary: 'Create a support request',
    description: 'Endpoint for creating support requests',
  })
  @ApiOkResponse({
    type: SupportRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id was not found
    
    InvalidBodyException:
      User id must be a UUID
      Support request topic must be a string
      Support request cannot have an empty topic
      Support request description must be a string
      Support request cannot have an empty description`,
  })
  @Post()
  create (@Body(SupportRequestBodyPipe) body: CreateSupportRequestDto)
  {
    return this.supportRequestService.create(body);
  }

  @ApiOperation({
    summary: 'Update a support request by id',
    description: 'Endpoint for updating support requests by id',
  })
  @ApiOkResponse({
    type: SupportRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id was not found
    
    InvalidBodyException:
      User id must be a UUID
      Support request topic must be a string
      Support request cannot have an empty topic
      Support request description must be a string
      Support request cannot have an empty description`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the support request to update',
  })
  @Patch('/:id')
  update (
    @Param('id', SupportRequestByIdPipe) id: string,
    @Body(SupportRequestBodyPipe) body: UpdateSupportRequestDto,
  )
  {
    return this.supportRequestService.updateById(id, body);
  }

  @ApiOperation({
    summary: 'Delete a support request',
    description: 'Endpoint for deleting support requests',
  })
  @ApiOkResponse({
    type: SupportRequestResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      support request with such id was not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the support request to delete',
  })
  @Delete('/:id')
  delete (@Param('id', SupportRequestByIdPipe) id: string)
  {
    return this.supportRequestService.deleteById(id);
  }
}
