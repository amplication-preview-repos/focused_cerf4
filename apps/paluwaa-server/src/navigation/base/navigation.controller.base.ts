/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { NavigationService } from "../navigation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NavigationCreateInput } from "./NavigationCreateInput";
import { Navigation } from "./Navigation";
import { NavigationFindManyArgs } from "./NavigationFindManyArgs";
import { NavigationWhereUniqueInput } from "./NavigationWhereUniqueInput";
import { NavigationUpdateInput } from "./NavigationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NavigationControllerBase {
  constructor(
    protected readonly service: NavigationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Navigation })
  @nestAccessControl.UseRoles({
    resource: "Navigation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createNavigation(
    @common.Body() data: NavigationCreateInput
  ): Promise<Navigation> {
    return await this.service.createNavigation({
      data: data,
      select: {
        createdAt: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Navigation] })
  @ApiNestedQuery(NavigationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Navigation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async navigations(@common.Req() request: Request): Promise<Navigation[]> {
    const args = plainToClass(NavigationFindManyArgs, request.query);
    return this.service.navigations({
      ...args,
      select: {
        createdAt: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Navigation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Navigation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async navigation(
    @common.Param() params: NavigationWhereUniqueInput
  ): Promise<Navigation | null> {
    const result = await this.service.navigation({
      where: params,
      select: {
        createdAt: true,
        icon: true,
        id: true,
        name: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Navigation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Navigation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateNavigation(
    @common.Param() params: NavigationWhereUniqueInput,
    @common.Body() data: NavigationUpdateInput
  ): Promise<Navigation | null> {
    try {
      return await this.service.updateNavigation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          icon: true,
          id: true,
          name: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Navigation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Navigation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteNavigation(
    @common.Param() params: NavigationWhereUniqueInput
  ): Promise<Navigation | null> {
    try {
      return await this.service.deleteNavigation({
        where: params,
        select: {
          createdAt: true,
          icon: true,
          id: true,
          name: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
