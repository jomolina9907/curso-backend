import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto{
    @IsString()
    @MinLength(8)
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @MinLength(8)
    @IsOptional()
    password: string;


}
