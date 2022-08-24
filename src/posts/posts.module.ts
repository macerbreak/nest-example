import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import {PostsController} from "./posts.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Post} from "./posts.model";


@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports:[
      SequelizeModule.forFeature([User, Post])
  ],
})
export class PostsModule {}
