import {Controller, Post} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {CreatePostDto} from "./dto/create-post.dto";

@Controller('posts')
export class PostsController {
    constructor(private postService:PostsService){}

    @Post()
    createPost(dto:CreatePostDto){
        this.postService.create(dto)
    }
}
