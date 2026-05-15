import { IsOptional, IsBoolean, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    title: string;
    
    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}