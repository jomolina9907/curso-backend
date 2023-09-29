import { Delete } from "@nestjs/common";
import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User {

    //@PrimaryGeneratedColumn()
    @Column({ primary: true, generated: true})
    id: number;

    @Column()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column({nullable: false})
    @IsNotEmpty()
    password: string;

    @DeleteDateColumn()
    deletedAt: Date;





}
