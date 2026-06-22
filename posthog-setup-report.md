<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Expo subscription tracker app. Here's what was done:

- **`posthog-react-native`** and its required peer dependencies (`expo-file-system`, `expo-application`, `expo-device`, `expo-localization`, `react-native-svg`) were installed.
- **`app.config.js`** was created to expose `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from `.env` via `expo-constants` extras.
- **`.env`** was created with the PostHog project token and host.
- **`src/config/posthog.ts`** was created as the singleton PostHog client, configured with app lifecycle capture, batching, and retry settings.
- **`app/_layout.tsx`** was updated to wrap the app in `PostHogProvider` and manually track screens using `posthog.screen()` on pathname changes (the correct approach for Expo Router).
- Event captures were added to 8 files covering the full user journey.

| Event name | Description | File |
|---|---|---|
| `sign_up_initiated` | User taps the Create Account link on the sign-up screen. | `app/(auth)/sign-up.tsx` |
| `sign_in_initiated` | User taps the Sign In link on the sign-in screen. | `app/(auth)/sign-in.tsx` |
| `onboarding_viewed` | User lands on the onboarding screen — top of the activation funnel. | `app/onboarding.tsx` |
| `subscription_expanded` | User expands a subscription card to view its details on the home screen. | `app/(tabs)/index.tsx` |
| `subscription_detail_viewed` | User navigates to the full detail page for a subscription. | `app/subscriptions/[id].tsx` |
| `subscriptions_tab_viewed` | User opens the Subscriptions tab — top of the subscriptions management funnel. | `app/(tabs)/subscriptions.tsx` |
| `insights_tab_viewed` | User opens the Insights tab to review their spending analytics. | `app/(tabs)/insights.tsx` |
| `settings_tab_viewed` | User opens the Settings tab. | `app/(tabs)/settings.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/457368/dashboard/1744654)
- [Activation funnel events](https://us.posthog.com/project/457368/insights/zRUZAjjK)
- [Subscription engagement](https://us.posthog.com/project/457368/insights/RNhWInwO)
- [Tab popularity](https://us.posthog.com/project/457368/insights/aMmGfViT)
- [Subscription detail views](https://us.posthog.com/project/457368/insights/9eb1lrNT)
- [Daily active users](https://us.posthog.com/project/457368/insights/jf7aG2yp)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
