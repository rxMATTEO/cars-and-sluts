import { defineStore } from 'pinia';
import { request } from '~/helpers/request';
import {
  siteConfigGql,
  SiteConfigType,
  SeoTagType,
  CatalogType,
  SetType,
  SiteSettingType,
} from '~/apollo/queries/siteConfig';

interface SettingSite {
  counter_ym: string;
  counter_vk: string;
  contact_phone: string;
  contact_coordinates: string;
  contact_address: string;
  contact_schedule: string;
  legal_inn: string;
  legal_kpp: string;
  legal_name: string;
  legal_ogrn: string;
  legal_address: string;
}

export const useSiteConfig = defineStore('siteConfig', {
  state: () => ({
    seoTag: <SeoTagType[]>[],
    settings: <SettingSite>{},
    catalog: <CatalogType[]>[],
    sets: <SetType[]>[],

    isNight: <boolean>false,
  }),

  actions: {
    async setIsNight(payload: boolean) {
      this.isNight = payload;
    },
    async getSiteConfig() {
      try {
        const { data } = await request<SiteConfigType>(
          siteConfigGql,
          undefined,
          true,
        );
        this.seoTag = data.value.seoTag;
        // @ts-ignore
        data.value?.siteSettings.settings.map((setting) => {
          // @ts-ignore
          this.settings[setting.key] = setting.value;
        });
        this.catalog = data.value.catalog;
        this.sets = data.value.sets;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
