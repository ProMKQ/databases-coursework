import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma-service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SupportRequestService
{
  constructor (private readonly prisma: PrismaService) {}

  getAll()
  {
    return this.prisma.supportRequest.findMany();
  }

  getById(supportRequestId: string)
  {
    return this.prisma.supportRequest.findUnique({
      where: { id: supportRequestId },
    });
  }

  create(data: Prisma.SupportRequestUncheckedCreateInput)
  {
    return this.prisma.supportRequest.create({
      data,
    });
  }

  updateById(supportRequestId: string, data: Prisma.SupportRequestUncheckedUpdateInput)
  {
    return this.prisma.supportRequest.update({
      where: { id: supportRequestId },
      data,
    });
  }

  deleteById(supportRequestId: string)
  {
    return this.prisma.supportRequest.delete({
      where: { id: supportRequestId },
    });
  }
}
