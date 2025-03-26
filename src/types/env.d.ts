declare namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      ADMIN_EMAIL: string;
      ADMIN_PASSWORD: string;
    }
  }