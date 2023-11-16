import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tendencias Actuales de Programacion')
    .setDescription('Documentacion del Proyecto 5to (ANGELO TORRES)')
    .setVersion('2.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      errorHttpStatusCode: 422,
    }));

  await app.listen(3000);
}
bootstrap();
