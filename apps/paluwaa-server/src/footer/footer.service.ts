import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FooterServiceBase } from "./base/footer.service.base";

@Injectable()
export class FooterService extends FooterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
