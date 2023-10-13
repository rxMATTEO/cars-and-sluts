import { defineNuxtPlugin } from '#app';
import { domains, mainDomain } from '~/app/variables';
import { useSiteConfig } from '~/stores/siteConfig';

export default defineNuxtPlugin(async ({ ssrContext }) => {
  const host = ssrContext?.event.node.req.headers.host;
  const filteredDomain = domains.filter(value => value.domain === host);
  const currentDomain = filteredDomain.length ? filteredDomain[0] : mainDomain;

  const siteConfig = useSiteConfig();

  await siteConfig.getSiteConfig();
});