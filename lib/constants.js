import dotenv from "dotenv";

dotenv.config();

if (process.env.CLOUDFLARE_API_KEY) {
  console.warn(
    "Using Global API Key is very risky for your Cloudflare account. It is strongly recommended to create an API Token with scoped permissions instead."
  );
}

export const API_KEY = process.env.CLOUDFLARE_API_KEY;

export const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const BLOCK_PAGE_ENABLED = !!parseInt(process.env.BLOCK_PAGE_ENABLED, 10);

export const BLOCK_BASED_ON_SNI = !!parseInt(process.env.BLOCK_BASED_ON_SNI, 10);

export const DEBUG = !!parseInt(process.env.DEBUG, 10);

export const CLOUDFLARE_RATE_LIMITING_COOLDOWN_TIME = 2 * 60 * 1000;
export const RATE_LIMITING_HTTP_ERROR_CODE = 429;

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  ? process.env.ALLOWLIST_URLS.split("\n").filter((x) => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter((x) => x)
  : undefined;

// You can have an unlimited number of allowlists, unlike blocklists.
export const RECOMMENDED_ALLOWLIST_URLS = [
  "https://raw.githubusercontent.com/AdguardTeam/AdGuardSDNSFilter/master/Filters/exclusions.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/issues.txt",
  "https://local.oisd.nl/extract/commonly_whitelisted.php",
];

// The default blocklist settings are optimized for performance while still blocking a lot.
// Adding too many blocklists may slow down DNS response times and thus your internet speed.
// If you'd like to use something larger, consider something like hagezi's Multi LIGHT:
// https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/domains/light.txt
export const RECOMMENDED_BLOCKLIST_URLS = [
  "https://raw.githubusercontent.com/mullvad/dns-blocklists/main/output/doh/doh_adblock.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/adblock/pro.mini.txt",
  "https://raw.githubusercontent.com/yokoffing/filterlists/main/privacy_essentials.txt",
  "https://raw.githubusercontent.com/mullvad/dns-blocklists/main/output/doh/doh_privacy.txt",    
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/ClearURLs for uBo/clear_urls_uboified.txt",
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt",
  "https://raw.githubusercontent.com/yokoffing/filterlists/main/annoyance_list.txt",
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/Dandelion Sprout's Anti-Malware List.txt",
  "https://raw.githubusercontent.com/iam-py-test/my_filters_001/main/antimalware.txt",
  "https://raw.githubusercontent.com/FadeMind/hosts.extras/master/add.Risk/hosts",
  "https://small.oisd.nl/",
  "https://adaway.org/hosts.txt",
];
