import { Injectable } from '@nestjs/common';

@Injectable() // decorator
export class AppService {
  getHello(): string {
    return 'Hello World! Mimi Cute';
  }
}
