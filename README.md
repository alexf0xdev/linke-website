# Linke Website

This project use [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations), [Prisma](https://www.prisma.io/), [NextAuth](https://next-auth.js.org/) and build with [Next.js](https://nextjs.org/).

## Install

Clone the repository and install dependencies:

```bash
git clone https://github.com/alexf0xdev/linke-website.git
cd website
pnpm install
```

## Fill environment variable

Create a ```.env``` file in the project directory and fill it with the following ```.enx.example```.

## Sync database

Synchronize the database with ```prisma.scheme```:

```bash
pnpm prisma migrate dev --name init
```

## Run project

Run the project using:

```bash
pnpm dev
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/alexf0xdev/linke-website/blob/main/LICENSE) file for details.

