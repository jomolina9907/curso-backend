import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
  @IsString()
  @MinLength(8)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @Transform(({ value }) => value.trim())
  password: string;
}