import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password123',
      database: 'shopdb',
      autoLoadEntities: true, // Charge automatiquement les entités déclarées dans les modules
      synchronize: true, // A False en prod
    }),
    UsersModule,
    PostsModule,
    CommentsModule,
  ],
  controllers: [AppController], // Retiré UsersController et CommentsController
  providers: [AppService], // Retiré UsersService et CommentsService
})
export class AppModule {}
