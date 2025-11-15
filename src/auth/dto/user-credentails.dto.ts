/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentailsDto {
  @IsString()
  @MaxLength(20)
  @MinLength(4)
  username: string;
  @IsString()
  @MaxLength(32)
  @MinLength(8)
  password: string;
}
