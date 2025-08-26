import { IsString, IsEmail, Length, IsEnum, Min, Max, IsInt } from 'class-validator';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @IsString()
  @Length(3, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 100)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsInt()
  @Min(13)
  @Max(120)
  age: number;
}
