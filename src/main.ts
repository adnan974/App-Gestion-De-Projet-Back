import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Remarque : J'utilise la validation pipe de manière globale
  // Cette pipe permet de vérifier si les données en entrée d'un controlleur sont bien celle attendue grâce à
  // des validador de type @[validator]
  app.useGlobalPipes(new ValidationPipe());
  // tag:[cors]
  // Ligne qui permet de parametrer la config cors sur nest js
  // A FAIRE: n'autoriser que les req qui viennent du serv react
  app.enableCors({ origin: true });

  const options = new DocumentBuilder()
    .setTitle('App geston de projet')
    .setDescription('Documentation app gestion de projet')
    .setVersion('1.0')
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(process.env.SERVER_PORT || 8080);
}
bootstrap();
