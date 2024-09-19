export class Blog {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.publishedOn = data.createdAt
    this.lastUpdated = data.updatedAt
    this.creator = data.creator
  }
}