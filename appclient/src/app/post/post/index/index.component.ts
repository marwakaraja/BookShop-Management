import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: any ;
  allposts:any;
  private _value! : string;

   
  constructor(public postService: PostService) { }
    
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: any)=>{
      this.posts = data;
      this.allposts=this.posts;
      console.log(this.posts);


    })  
  }
    
  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter((item:any) => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

  
  public get value() : string {
    return this._value;
  }
  public set value(v : string) {
    this._value = v;
    this.allposts=this.posts.filter((post:any)=> post.postTitle.includes( this._value));


  }
  

}
