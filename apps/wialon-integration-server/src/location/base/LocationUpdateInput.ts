/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsNumber,
  ValidateNested,
  IsDate,
} from "class-validator";
import { MessageUpdateManyWithoutLocationsInput } from "./MessageUpdateManyWithoutLocationsInput";
import { Type } from "class-transformer";

@InputType()
class LocationUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  altitude?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  latitude?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  longitude?: number | null;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutLocationsInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutLocationsInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutLocationsInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutLocationsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { LocationUpdateInput as LocationUpdateInput };
