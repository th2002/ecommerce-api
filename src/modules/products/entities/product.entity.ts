import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ProductEntity {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  create_date: Date;
  update_date: Date;
}
