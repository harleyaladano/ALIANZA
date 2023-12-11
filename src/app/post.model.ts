export class Post {
  constructor(
    public title: string,
    public imgPath: string,
    public description: string,
    public author: string,
    public dateCreated: Date,
    public numberOfLikes: number,
    public numberOfDislikes: number, 
    public comments: string[] = []
  ) {
  }
}