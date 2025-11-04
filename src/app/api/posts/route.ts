import { NextResponse } from 'next/server'

// In-memory storage for demo purposes
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post', author: 'John Doe' },
  { id: 2, title: 'Second Post', content: 'This is the second post', author: 'Jane Smith' },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    data: posts,
    count: posts.length
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, content, author } = body

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: 'Title and content are required' },
        { status: 400 }
      )
    }

    const newPost = {
      id: posts.length + 1,
      title,
      content,
      author: author || 'Anonymous'
    }

    posts.push(newPost)

    return NextResponse.json({
      success: true,
      data: newPost,
      message: 'Post created successfully'
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

export async function DELETE() {
  posts = []
  return NextResponse.json({
    success: true,
    message: 'All posts deleted'
  })
}
