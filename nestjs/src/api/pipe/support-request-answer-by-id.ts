import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../invalid-entity-id-exception';
import { SupportRequestAnswerService } from '../service/support-request-answer';

@Injectable()
export class SupportRequestAnswerByIdPipe implements PipeTransform
{
  constructor (private readonly supportRequestAnswerService: SupportRequestAnswerService) {}

  async transform(id: string): Promise<any>
  {
    const supportRequestAnswer = await this.supportRequestAnswerService.getById(id);
    if (!supportRequestAnswer)
    {
      throw new InvalidEntityIdException('Support request answer');
    }

    return supportRequestAnswer.id;
  }
}
