import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({
    required: true,
    type: String,
    unique: true
  })
  name: string;

  @Prop({
    required: true,
    type: Number,
    min: 0
  })
  price: number;

  @Prop({
    required: true,
    type: Number,
    min: 0
  })
  quantity: number;

  @Prop({
    required: false,
    type: String,
    default: '',
    min: 0,
    max: 255
  })
  description: string;

  @Prop({
    required: false,
    type: [String],
    default: () => []
  })
  imageUrl?: string[];

  @Prop({
    required: false,
    type: Number,
    default: 0,
    min: 0,
    max: 100
  })
  discount?: number;

  @Prop({
    required: false,
    type: Number,
    default: 0,
    min: 0
  })
  stock?: number;

  @Prop({
    required: true,
    type: String
  })
  categoryId: string;

  @Prop({
    required: false,
    type: Number,
    default: 0
  })
  views?: number;

  @Prop({
    required: false,
    type: Number,
    default: 0,
    min: 0,
    max: 5
  })
  rating?: number;

  @Prop({
    required: false,
    type: Number,
    default: 0,
    min: 0
  })
  sold?: number;

  @Prop({
    required: false,
    type: Date,
    default: Date.now
  })
  create_date?: Date;

  @Prop({
    required: false,
    type: Date,
    default: Date.now
  })
  update_date?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
