import { logger } from "@/utils/Logger"
import { api } from "./AxiosService"

class BlogsService {
async getAllBlogs() {
  const res = await api.get('api/blogs')
  logger.log(res.data)
}
}

export const blogsService = new BlogsService()