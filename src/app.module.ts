import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module'; // Assuming AuthModule exists
import { UserModule } from './user/user.module'; // Assuming UserModule exists

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://172.26.98.57:27017/nest'), // Replace with your MongoDB connection string
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
