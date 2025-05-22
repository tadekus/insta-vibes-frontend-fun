
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.040cc75bce4f4fe586abc057300344e8',
  appName: 'insta-vibes-frontend-fun',
  webDir: 'dist',
  server: {
    url: "https://040cc75b-ce4f-4fe5-86ab-c057300344e8.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;
