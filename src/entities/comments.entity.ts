import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import User from "./user.entity";
import Video from "./Videos";
import { LikesComments } from "./";
import { v4 as uuidv4 } from "uuid";

@Entity("comments")
class Comments {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  description!: string;

  @Column({ type: "integer", nullable: true, default: 0 })
  likes!: number;

  @ManyToOne((type) => User, (user) => user.comments)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne((type) => Video, (video) => video.comments, { eager: true })
  @JoinColumn({ name: "video_id" })
  video!: Video;

  @OneToMany((type) => LikesComments, (likes) => likes.comments)
  likescomments!: LikesComments[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
export default Comments;