import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";

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
    // @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @ApiOperation({summary:"Getting User"})
    @ApiResponse({status:200, type:[User]})
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }
}
