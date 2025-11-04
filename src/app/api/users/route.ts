import { NextResponse } from 'next/server'

// In-memory storage for demo purposes
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

export async function GET() {
  return NextResponse.json({
    success: true,
    data: users,
    count: users.length
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email } = body

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const newUser = {
      id: users.length + 1,
      name,
      email
    }

    users.push(newUser)

    return NextResponse.json({
      success: true,
      data: newUser,
      message: 'User created successfully'
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    )
  }
}

export async function DELETE() {
  users = []
  return NextResponse.json({
    success: true,
    message: 'All users deleted'
  })
}
