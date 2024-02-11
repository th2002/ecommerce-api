import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsArray
} from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  imageUrl?: string[];

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsNumber()
  stock?: number;

  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsOptional()
  @IsNumber()
  views?: number;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsNumber()
  sold?: number;
}
