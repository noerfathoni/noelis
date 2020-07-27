import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  deletedAt: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

}