import * as graphql from "@nestjs/graphql";
import { FooterResolverBase } from "./base/footer.resolver.base";
import { Footer } from "./base/Footer";
import { FooterService } from "./footer.service";

@graphql.Resolver(() => Footer)
export class FooterResolver extends FooterResolverBase {
  constructor(protected readonly service: FooterService) {
    super(service);
  }
}
