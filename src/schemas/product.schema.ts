import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({
    required: true,
    unique: true,
    type: String
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
    type: Date,
    default: Date.now,
    required: false
  })
  create_date?: Date;

  @Prop({
    type: Date,
    default: Date.now,
    required: false
  })
  update_date?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
