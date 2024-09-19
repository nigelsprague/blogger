import { logger } from "@/utils/Logger"
import { api } from "./AxiosService"
import { Blog } from "@/models/Blog"
import { AppState } from "@/AppState"

class BlogsService {
async getAllBlogs() {
  const res = await api.get('api/blogs')
  logger.log(res.data)
  const newBlogs = res.data.map(blog => new Blog(blog))
  AppState.blogs = newBlogs
}
}

export const blogsService = new BlogsService()