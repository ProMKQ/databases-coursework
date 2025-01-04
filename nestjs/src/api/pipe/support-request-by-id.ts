import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../invalid-entity-id-exception';
import { SupportRequestService } from '../service/support-request';

@Injectable()
export class SupportRequestByIdPipe implements PipeTransform
{
  constructor (private readonly supportRequestService: SupportRequestService) {}

  async transform(id: string): Promise<any>
  {
    const supportRequest = await this.supportRequestService.getById(id);
    if (!supportRequest)
    {
      throw new InvalidEntityIdException('Support request');
    }

    return supportRequest.id;
  }
}
