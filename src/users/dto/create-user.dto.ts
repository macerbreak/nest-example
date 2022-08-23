import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({example:"user@email.com", description:"User email"})
    @IsString({message:"Should be a string"})
    @IsEmail({},{message:"Wrong email"})
    readonly email:string
    @IsString({message:"Should be a string"})
    @Length(4,16,{message:"Not more than 16 and not less than 4"})
    @ApiProperty({example:"12345678", description:"User password"})
    readonly password:string
}