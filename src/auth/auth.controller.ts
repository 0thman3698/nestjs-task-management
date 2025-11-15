import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentailsDto } from './dto/user-credentails.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signup(@Body() authCredentialsDto: AuthCredentailsDto): Promise<void> {
    return this.authService.signup(authCredentialsDto);
  }

  @Post('/login')
  signin(
    @Body() authCredentialsDto: AuthCredentailsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signin(authCredentialsDto);
  }
}
