import { SITE, BUSINESS } from "@data/client";

export function getLocalBusinessSchema(origin) {

	return {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",

		"name": BUSINESS.name,
		"url": SITE.url,

		"email": BUSINESS.email,
		"telephone": BUSINESS.phoneDisplay,

		"address": {
			"@type": "PostalAddress",
			"addressLocality": BUSINESS.address.city,
			"addressRegion": BUSINESS.address.province,
			"addressCountry": BUSINESS.address.country,
		},

		"areaServed": BUSINESS.serviceAreas,

		"openingHours": BUSINESS.openingHours,

		"inLanguage": SITE.locale,

		"image": origin + BUSINESS.logo,
		"logo": origin + BUSINESS.logo,
	};
}