import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit{

  id!: number;
  post!: IPost;
   
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      
    this.postService.find(this.id).subscribe((data: IPost)=>{
      this.post = data;
    });
  }
  

}
