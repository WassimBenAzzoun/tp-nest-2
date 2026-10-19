import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CategoriesModule } from './categories/categories.module.js';
import { ProductsModule } from './products/products.module.js';
import { ClientsModule } from './clients/clients.module.js';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [CategoriesModule, ProductsModule, ClientsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
