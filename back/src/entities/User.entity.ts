import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import Contact from "./Contact.entity";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 150 })
    name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column({ length: 150 })
    password: string;

    @Column({length: 150 })
    contactNumber: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @DeleteDateColumn()
    deletedAt: string | null;

    @OneToMany(() => Contact, (c) => c.user)
    contact: Array<Contact>;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      const hasRounds: number = getRounds(this.password);
      if (!hasRounds) {
        this.password = hashSync(this.password, 10);
      }
    }
}