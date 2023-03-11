<script lang="ts">
import { PUBLIC_BASE_URL, PUBLIC_SEO_DESCRIPTION, PUBLIC_SEO_TITLE } from '$env/static/public';
import '../app.css';
import { Fractils } from 'fractils';
import { MetaTags } from 'svelte-meta-tags';

const og = new URL('/og.png', PUBLIC_BASE_URL).href;
</script>

<Fractils />

<svelte:head>
  <script src="https://api.countapi.xyz/hit/{new URL(PUBLIC_BASE_URL).host}/visits"></script>
</svelte:head>

<MetaTags
  title={PUBLIC_SEO_TITLE}
  description={PUBLIC_SEO_DESCRIPTION}
  openGraph={{
    title: PUBLIC_SEO_TITLE,
    description: PUBLIC_SEO_DESCRIPTION,
    images: [
      {
        url: og,
      },
    ],
  }}
  twitter={{
    title: PUBLIC_SEO_TITLE,
    description: PUBLIC_SEO_DESCRIPTION,
    cardType: 'summary_large_image',
    image: og,
  }}
/>
<slot />
