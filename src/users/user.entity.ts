import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Profile } from "./profile.entity";
import { Post } from "src/posts/posts.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column({ type: "datetime", default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date;

    @Column({nullable: true})
    authStrategy: string;

    @OneToOne(()=> Profile)
    @JoinColumn()
    profile: Profile

    @OneToMany(()=> Post, post => post.author)
    posts: Post[]
    

}