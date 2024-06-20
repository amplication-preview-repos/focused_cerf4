import * as graphql from "@nestjs/graphql";
import { NavigationResolverBase } from "./base/navigation.resolver.base";
import { Navigation } from "./base/Navigation";
import { NavigationService } from "./navigation.service";

@graphql.Resolver(() => Navigation)
export class NavigationResolver extends NavigationResolverBase {
  constructor(protected readonly service: NavigationService) {
    super(service);
  }
}
