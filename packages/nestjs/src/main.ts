import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.NEST_PORT);
  console.log(`Listening on port ${process.env.NEST_PORT}`);
}
bootstrap();
