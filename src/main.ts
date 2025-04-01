import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const reflector = app.get(Reflector);
  // app.useGlobalGuards(new JwtAuthGuard(reflector));

  app.useStaticAssets(join(__dirname, '..', 'public')); // js, css ,images
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // view
  app.setViewEngine('ejs');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Chuyển đổi dữ liệu thành instance của DTO
      whitelist: true, // Chỉ giữ lại các field có trong DTO
      forbidNonWhitelisted: true, // Chặn field không hợp lệ
    }),
  );

  await app.listen(configService.get('PORT'));
}
bootstrap();
