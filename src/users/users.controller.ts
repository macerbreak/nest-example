import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@Controller('users')
@ApiTags("Users")
export class UsersController {
    constructor(private usersService: UsersService){}
    @ApiOperation({summary:"Creating user"})
    @ApiResponse({status:200, type:User})
    @Post()
    create(@Body() userDto:CreateUserDto){
        return this.usersService.createUser(userDto)
    }
    @ApiOperation({summary:"Getting User"})
    @ApiResponse({status:200, type:[User]})
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }
}
