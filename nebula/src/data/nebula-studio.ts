// NebulaStudio — public information used by /nebula-studio/ pages (Google OAuth verification).
// The name must match the OAuth consent screen exactly: "NebulaStudio".
import { site } from '../i18n/ui';

export const studio = {
  name: 'NebulaStudio',
  tagline: 'YouTube Shorts automation',
  appUrl: 'https://nebula.nut.in.th/login',
  appHost: 'nebula.nut.in.th',
  home: '/nebula-studio/',
  privacy: '/nebula-studio/privacy/',
  terms: '/nebula-studio/terms/',
  developer: `${site.owner} · nut.in.th`,
  email: site.email, // CONFIRM: inbox for privacy and deletion requests
};

// CONFIRM: must match the scopes requested in the app's OAuth config and in Google Cloud Console.
export const scopes = [
  {
    scope: 'openid, email, profile',
    url: 'openid · …/auth/userinfo.email · …/auth/userinfo.profile',
    what: 'Your Google account ID, email address, name and profile picture',
    why: 'To sign you in, check that your account is on the allowed list, and show who is signed in',
  },
  {
    scope: 'YouTube upload',
    url: 'https://www.googleapis.com/auth/youtube.upload',
    what: 'Permission to upload videos to the YouTube channel you choose',
    why: 'To publish the Shorts you create in NebulaStudio to your channel, only when you ask it to',
  },
  {
    scope: 'YouTube account',
    url: 'https://www.googleapis.com/auth/youtube.readonly',
    what: 'Your channel name, playlists and the status of videos uploaded through NebulaStudio',
    why: 'To let you pick the target channel and playlist, and to show whether each upload is processing, published or failed',
  },
];

export const limitedUse =
  "NebulaStudio's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.";
