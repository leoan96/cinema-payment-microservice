import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtAuthenticationService } from 'src/module/jwt/jwt.service';
import { verifyBackendToken } from '../shared/utils';
import * as httpContext from 'express-http-context';
import { CORRELATION_ID } from 'src/shared/constant/httpContext.constants';

@Injectable()
export class BackendApiGuard implements CanActivate {
  private readonly logger = new Logger(BackendApiGuard.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtAuthenticationService: JwtAuthenticationService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    return this.validateJwt(request);
  }

  private async validateJwt(request: Request): Promise<boolean> {
    const verifiedBackendToken = verifyBackendToken(
      request,
      this.configService,
    );

    let payload;
    if (!verifiedBackendToken) {
      const accessToken = request.headers['access-token'];

      payload = await this.jwtAuthenticationService.verifyClaims(accessToken);

      this.logger.log(
        JSON.stringify({
          timestamp: new Date().toISOString(),
          correlationId: httpContext.get(CORRELATION_ID),
          ...payload,
        }),
      );
    }

    return !!payload || verifiedBackendToken;
  }
}
