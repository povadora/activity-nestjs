import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  private contacts = [
    {
      id: 1,
      contact_type: 'email',
      contact_category: 'work',
      contact_value: 'charlie@gmail.com',
      user_id: 1,
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 2,
      contact_type: 'phone',
      contact_category: 'personal',
      contact_value: '09932537278',
      user_id: 2,
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 3,
      contact_type: 'phone',
      contact_category: 'personal',
      contact_value: '09954015338',
      user_id: 3,
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 4,
      contact_type: 'email',
      contact_category: 'work',
      contact_value: 'povadoracharlie@gmail.com',
      user_id: 4,
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 5,
      contact_type: 'phone',
      contact_category: 'personal',
      contact_value: '09060252123',
      user_id: 5,
      created_at: new Date(),
      created_by: 'me',
    },
  ];

  findAll() {
    return this.contacts;
  }

  findOne(id: number) {
    return this.contacts.find(contact => contact.id === id);
  }
}
