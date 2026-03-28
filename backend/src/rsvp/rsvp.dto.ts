import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRsvpDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  response: 'yes' | 'no' | 'maybe';

  @IsOptional()
  @IsString()
  favoriteTown?: string;

  @IsOptional()
  @IsString()
  message?: string;
}
