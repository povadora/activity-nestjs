import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  private profiles = [
    {
      id: 1,
      firstname: 'Charlie',
      lastname: 'Povdora',
      age: 20,
      avatar: 'https://ph.pinterest.com/pin/585890232788342642/',
      gender: 'male',
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 2,
      firstname: 'Kristel',
      lastname: 'Povadora',
      age: 10,
      avatar: 'https://ph.pinterest.com/pin/585890232788342642/',
      gender: 'female',
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 3,
      firstname: 'edwin',
      lastname: 'Povadora',
      age: 21,
      avatar: 'https://ph.pinterest.com/pin/585890232788342642/',
      gender: 'male',
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 4,
      firstname: 'Rosalie',
      lastname: 'Povadora',
      age: 38,
      avatar: 'https://ph.pinterest.com/pin/585890232788342642/',
      gender: 'female',
      created_at: new Date(),
      created_by: 'me',
    },
    {
      id: 2,
      firstname: 'Kent',
      lastname: 'abarquez',
      age: 24,
      avatar: 'https://ph.pinterest.com/pin/585890232788342642/',
      gender: 'male',
      created_at: new Date(),
      created_by: 'me',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: number) {
    return this.profiles.find(profile => profile.id === id);
  }
}
