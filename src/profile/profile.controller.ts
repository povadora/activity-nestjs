import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('api/user')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('profiles')
  getAllProfiles() {
    return this.profileService.findAll();
  }

  @Get('profile/:id')
  getProfileById(@Param('id') id: string) {
    return this.profileService.findOne(Number(id));
  }
}
