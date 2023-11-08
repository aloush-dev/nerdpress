# Nerdpress

A Website Template with TRPC, Next.js, TypeScript, Prisma, and NextAuth

## Description

This project is a website template that allows users to easily add their information to create a personalized web presence. It leverages various technologies, including TRPC, Next.js, TypeScript, Prisma, and NextAuth for a robust and modern web development stack.

## Getting Started

To set up this project, follow these steps:

1. Clone the repository:

git clone https://github.com/yourusername/your-project.git

2. Install dependencies:

npm install

3. Create a `.env` file with the following variables:

- `DATABASE_URL`: Your database connection URL.
- `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.
- `NEXT_PUBLIC_RESEND_API_KEY`: API key for the contact form.
- `NEXTAUTH_SECRET`: Your NextAuth secret.
- `NEXTAUTH_URL`: The URL of your application.

4. Set up an admin account in the database. You can do this by running appropriate Prisma migrations or using a database management tool.

5. After setting up the admin account, you will be prompted with a page to configure the initial settings of the website.

## Usage

To use this template:

1. Start the development server:

npm run dev

2. Access the website at `http://localhost:3000` or the specified URL.

3. Customize the website with your own content and styles.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [TRPC](https://trpc.io/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://prisma.io/)
- [NextAuth](https://next-auth.js.org/)
