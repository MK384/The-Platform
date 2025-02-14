import { Component , Input} from '@angular/core';
import { Comment } from '../../../core/interfaces/Comment.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-reply',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-reply.component.html',
  styleUrl: './comment-reply.component.css'
})
export class CommentReplyComponent {
  @Input() comment!: Comment;
}
