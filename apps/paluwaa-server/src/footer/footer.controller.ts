import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FooterService } from "./footer.service";
import { FooterControllerBase } from "./base/footer.controller.base";

@swagger.ApiTags("footers")
@common.Controller("footers")
export class FooterController extends FooterControllerBase {
  constructor(protected readonly service: FooterService) {
    super(service);
  }
}
