import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../invalid-entity-id-exception';
import { PrismaService } from '../../prisma-service';
import { UpdateSupportRequestDto } from '../dto/update-support-request';

@Injectable()
export class SupportRequestBodyPipe implements PipeTransform
{
  constructor (private readonly prisma: PrismaService) {}

  async transform(body: UpdateSupportRequestDto): Promise<any>
  {
    if (body.userId)
    {
      const user = await this.prisma.user.findUnique({
        where: { id: body.userId },
      });

      if (!user)
      {
        throw new InvalidEntityIdException('User');
      }
    }

    return body;
  }
}
