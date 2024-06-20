import { Module } from "@nestjs/common";
import { FooterModuleBase } from "./base/footer.module.base";
import { FooterService } from "./footer.service";
import { FooterController } from "./footer.controller";
import { FooterResolver } from "./footer.resolver";

@Module({
  imports: [FooterModuleBase],
  controllers: [FooterController],
  providers: [FooterService, FooterResolver],
  exports: [FooterService],
})
export class FooterModule {}
