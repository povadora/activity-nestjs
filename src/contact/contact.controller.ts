import { Controller, Get, Param } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('all')
  getAllContacts() {
    return this.contactService.findAll();
  }

  @Get(':id')
  getContactByI(@Param('id') id: string) {
    return this.contactService.findOne(Number(id));
  }
}
