import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma-service';
import {Prisma} from "@prisma/client";

@Injectable()
export class SupportRequestAnswerService
{
  constructor (private readonly prisma: PrismaService) {}

  getAll()
  {
    return this.prisma.supportRequestAnswer.findMany();
  }

  getById(supportRequestAnswerId: string)
  {
    return this.prisma.supportRequestAnswer.findUnique({
      where: { id: supportRequestAnswerId },
    });
  }

  create(data: Prisma.SupportRequestAnswerUncheckedCreateInput)
  {
    return this.prisma.supportRequestAnswer.create({
      data,
    });
  }

  updateById(supportRequestAnswerId: string, data: Prisma.SupportRequestAnswerUncheckedUpdateInput)
  {
    return this.prisma.supportRequestAnswer.update({
      where: { id: supportRequestAnswerId },
      data,
    });
  }

  deleteById(supportRequestAnswerId: string)
  {
    return this.prisma.supportRequestAnswer.delete({
      where: { id: supportRequestAnswerId },
    });
  }
}
