import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
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
  controllers: [AppController, UsersController, CommentsController],
  providers: [AppService, UsersService, CommentsService],
})
export class AppModule {}
