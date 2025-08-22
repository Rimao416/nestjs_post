// comment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn() // PK, auto-incrément
  id: number;

  @Column({ length: 1000, nullable: false }) // NOT NULL, longueur max
  text: string;

  @Column({ type: 'int', default: 0 }) // >= 0
  likes: number;

  @Column({ type: 'boolean', default: false }) // default false
  isApproved: boolean;

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false }) // FK → Post.id
  post: Post;

  @ManyToOne(() => User, (user) => user.comments, { nullable: false }) // FK → User.id
  author: User;

  @CreateDateColumn() // default: now()
  createdAt: Date;
}
