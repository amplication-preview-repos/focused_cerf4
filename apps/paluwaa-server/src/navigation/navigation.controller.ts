import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NavigationService } from "./navigation.service";
import { NavigationControllerBase } from "./base/navigation.controller.base";

@swagger.ApiTags("navigations")
@common.Controller("navigations")
export class NavigationController extends NavigationControllerBase {
  constructor(protected readonly service: NavigationService) {
    super(service);
  }
}
