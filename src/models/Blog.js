export class Blog {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creator = data.creator
    this.published = data.published
  }

  get publishedOn() {
    const publishDate = new Date(this.createdAt).toLocaleDateString()
    return publishDate
  }

  get lastUpdated() {
    const updateDate = new Date(this.updatedAt).toLocaleDateString()
    return updateDate
  }
}