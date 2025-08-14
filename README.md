
# Next.js + Inngest Template

A production-ready Next.js template with Inngest integration for background jobs and workflows.

## Features

- **Next.js 15** with App Router
- **TypeScript** with strict configuration
- **TailwindCSS** for styling
- **Inngest** for background jobs and workflows
- **API Routes** examples
- **pnpm** package manager
- Production-ready configuration

## Getting Started

1. **Fork this template** by clicking the "Use Template" button
2. **Install dependencies** (automatically handled by Replit)
3. **Click the Run button** to start the development server
4. Visit your app at the provided URL

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── hello/          # Example API route
│   │   └── inngest/        # Inngest webhook endpoint
│   ├── globals.css         # Global styles with TailwindCSS
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
└── inngest/
    ├── client.ts           # Inngest client configuration
    └── functions.ts        # Background job functions
```

## Inngest Integration

This template includes Inngest for handling background jobs and workflows. Example functions include:

- `hello-world` - Simple example function
- `process-user-signup` - Multi-step workflow with delays

### Triggering Functions

Send events to trigger functions:

```typescript
import { inngest } from './src/inngest/client'

// Trigger hello world function
await inngest.send({
  name: "test/hello.world",
  data: { email: "user@example.com" }
})

// Trigger user signup workflow
await inngest.send({
  name: "user/signup",
  data: { 
    email: "newuser@example.com",
    userId: "123"
  }
})
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

## API Routes

- `GET /api/hello` - Example API endpoint
- `POST /api/hello` - Example POST endpoint
- `/api/inngest` - Inngest webhook endpoint (auto-configured)

## Environment Variables

For production deployments, you may need:

- `INNGEST_SIGNING_KEY` - For Inngest webhook verification
- `INNGEST_EVENT_KEY` - For sending events to Inngest

## Deployment

This template is configured for Replit deployments:

1. Click the "Deploy" button in Replit
2. Choose your deployment configuration
3. Your app will be live with automatic scaling

## Customization

### Adding New Inngest Functions

1. Create new functions in `src/inngest/functions.ts`
2. Export them and add to the functions array in `src/app/api/inngest/route.ts`

### Styling

- Modify `src/app/globals.css` for global styles
- Use TailwindCSS classes throughout your components
- Update `tailwind.config.ts` for custom design tokens

### API Routes

- Add new routes in `src/app/api/`
- Follow Next.js App Router conventions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Inngest Documentation](https://www.inngest.com/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## License

MIT License - feel free to use this template for any project!
