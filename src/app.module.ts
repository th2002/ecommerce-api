import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ProductsModule } from '@modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      dbName: 'ecommerce-api'
    }),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
