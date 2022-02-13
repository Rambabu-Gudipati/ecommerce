// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {description, title, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}
export default BlogItem
