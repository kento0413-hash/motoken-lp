# MOTOKEN LP — Architectural Decisions

## Deferred: Requires API Keys / External Services

### 1. Email Contact Form Backend
- **Current**: Contact redirects to lit.link/naturemotoken
- **Ideal**: Server-side form with email delivery (e.g., Resend, SendGrid)
- **Reason deferred**: Requires email service API key
- **When ready**: Add Next.js API route + form component

### 2. Analytics / Conversion Tracking
- **Note**: Vercel Analytics can be added as a package (no external API key)
- **Google Analytics**: Requires GA4 measurement ID
- **Reason deferred**: GA4 ID not available; Vercel Analytics will be integrated without external keys

### 3. CMS Integration
- **Current**: All content is hardcoded in components
- **Ideal**: Headless CMS (e.g., Notion API, microCMS) for content updates
- **Reason deferred**: Requires CMS setup and API keys

### 4. Newsletter / Email Collection
- **Current**: No email collection mechanism
- **Ideal**: Email signup with Mailchimp, ConvertKit, etc.
- **Reason deferred**: Requires service API key
