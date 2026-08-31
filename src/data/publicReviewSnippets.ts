export type PublicReviewSnippet = {
  text: string;
  author?: string;
  postedAt?: string;
  sourceUrl: string;
};

// Short paraphrases of publicly accessible, property-specific stay feedback.
// Source URLs are kept internally for provenance. The public UI intentionally
// stays source-neutral and does not expose platform branding.
export const PUBLIC_REVIEW_SNIPPETS: Record<string, PublicReviewSnippet[]> = {
  'google-top-001': [
    { text: 'Good Melaka location and attractive sea views, but some guests say unit cleanliness can vary and basic supplies may be limited.', postedAt: '2025-02', sourceUrl: 'https://www.tripadvisor.com.my/Hotel_Review-g306997-d26811524-Reviews-Bali_Residences_Sea_View_Suites_Melaka-Melaka_Central_Melaka_District_Melaka_State.html' }
  ],
  'google-top-002': [
    { text: 'Guests frequently praise the spacious apartment, sweeping sea views and responsive service; some say maintenance could be more consistent.', postedAt: '2026-07', sourceUrl: 'https://www.agoda.com/en-ca/country-garden-danga-bay-sea-view-homestay-by-stayrene/hotel/johor-bahru-my.html' },
    { text: 'Easy check-in, clean rooms and excellent views made the stay feel more like a premium suite.', postedAt: '2025-03', sourceUrl: 'https://www.tripadvisor.com/Hotel_Review-g298278-d26811531-Reviews-Country_Garden_Danga_Bay_Sea_View_by_Stayrene-Johor_Bahru_Johor_Bahru_District_Johor.html' }
  ],
  'google-top-006': [
    { text: 'Recent guests describe the rooms as very clean, comfortable and good value, with convenient parking.', postedAt: '2026-06', sourceUrl: 'https://www.booking.com/reviews/my/hotel/7-minutes-driving-to-tc-beach-123-guest-house.html' }
  ],
  'google-top-013': [
    { text: 'Strategic near Kea Farm, clean and well equipped with Wi-Fi and entertainment; one newer review says bathroom cleanliness could improve.', postedAt: '2026-07', sourceUrl: 'https://www.agoda.com/equatorial-hill-resort-copthorne/hotel/cameron-highlands-my.html' }
  ],
  'google-top-014': [
    { text: 'Convenient central location, neat decoration and a clean unit; one guest noted the second bedroom had no window.', postedAt: '2024-09', sourceUrl: 'https://www.booking.com/reviews/my/hotel/luxury-troika-kota-bharu-by-aura-troika.en-gb.html' }
  ],
  'google-top-015': [
    { text: 'Clean studio with a sea-view balcony, convenient parking and helpful caretaker; guests like the location and easy self check-in.', postedAt: '2025-04', sourceUrl: 'https://www.agoda.com/best-moments-studio-balcony-imperium-resident/hotel/kuantan-my.html' }
  ],
  'google-top-016': [
    { text: 'Spacious villa, clean pool and helpful staff. Families like the calm setting, though a few facilities were described as showing wear.', postedAt: '2026-06', sourceUrl: 'https://www.booking.com/reviews/my/hotel/sembilan-langkawi.en-gb.html' }
  ],
  'google-top-028': [
    { text: 'Very clean, fragrant and well equipped, with strong Wi-Fi, easy parking and a responsive host. Several guests say they would repeat the stay.', postedAt: '2026-06', sourceUrl: 'https://www.agoda.com/en-us/homestay-mersing-anid-d-lautan-biru/hotel/mersing-my.html' }
  ],
  'google-top-030': [
    { text: 'Family-friendly location and generally comfortable, but some guests mention small maintenance issues such as access cards and missing toiletries.', postedAt: '2026-04', sourceUrl: 'https://www.booking.com/reviews/my/hotel/riverview-8pax-2br-in-kbtown-wi-fi-a-10-7.html' }
  ],
  'google-top-032': [
    { text: 'Clean, spacious and well located near town. Groups like the ensuite layout and easy check-in; one guest suggested adding fans in the rooms.', postedAt: '2026-08', sourceUrl: 'https://www.agoda.com/th-ipoh-homestay-simee-10pax-8mins-to-attraction/hotel/ipoh-my.html' }
  ],
  'google-top-034': [
    { text: 'Guests consistently mention spotless rooms, a warm and helpful host and thoughtful breakfast; the steep stairs can be awkward with heavy luggage.', postedAt: '2026', sourceUrl: 'https://www.booking.com/hotel/my/sweet-loft-homestay.html' }
  ],
  'google-top-037': [
    { text: 'Large, clean family property with pool, karaoke and plenty of activity space. Guests praise the host and say it works especially well for groups.', postedAt: '2026-05', sourceUrl: 'https://www.agoda.com/en-ie/tranquil-arcadia-homestay-by-desaru/hotel/desaru-my.html' }
  ],
  'google-top-040': [
    { text: 'Big house that works well for family gatherings, with a pool and responsive host. Some recent guests report maintenance and cleanliness issues.', postedAt: '2026-07', sourceUrl: 'https://www.agoda.com/ria-homestay/hotel/johor-bahru-my.html' },
    { text: 'Feedback is mixed: some families loved the space and pool, while others complained about worn facilities and inconsistent upkeep.', postedAt: '2025-10', sourceUrl: 'https://wanderlog.com/place/details/10953371/ria-homestay' }
  ],
  'google-top-042': [
    { text: 'Clean, spacious and comfortable for extended families, with easy check-in and a responsive host. Guests also like the secure neighbourhood.', postedAt: '2024-04', sourceUrl: 'https://www.agoda.com/glenmarie-austin-20pax-mount-austin-family-stay/hotel/johor-bahru-my.html' }
  ],
  'google-top-043': [
    { text: 'Very clean and complete for families, with a private pool and fast owner response. Guests repeatedly say the house feels better than expected for the price.', postedAt: '2026-06', sourceUrl: 'https://www.agoda.com/tepak-nusuk-s-homestay/hotel/kota-bharu-my.html' }
  ],
  'google-top-044': [
    { text: 'Guests rate the home very highly for cleanliness, spaciousness, hospitality and family comfort.', postedAt: '2026', sourceUrl: 'https://www.airbnb.com.my/rooms/1297100867397235998' }
  ],
  'google-top-047': [
    { text: 'Great for large family or friend groups with a private pool and BBQ area. Feedback is positive overall, though a few guests mention dust and pool maintenance.', postedAt: '2025', sourceUrl: 'https://www.agoda.com/a-spacious-7br-home-w-private-swimming-pool/hotel/langkawi-my.html' }
  ],
  'google-top-048': [
    { text: 'Huge house for big groups, with karaoke as the standout feature and a friendly host. Mosquitoes and a few air-conditioning or drain issues come up in reviews.', postedAt: '2025', sourceUrl: 'https://www.agoda.com/en-sg/party-haus/hotel/johor-bahru-my.html' }
  ],
  'google-top-052': [
    { text: 'Exceptionally clean, spacious and well stocked for large groups, with a helpful host and convenient access to Ipoh town and shops.', postedAt: '2026-06', sourceUrl: 'https://www.agoda.com/en-in/ipoh-south-homestay-8-16pax-10mins-to-attraction/hotel/ipoh-my.html' }
  ],
  'google-top-059': [
    { text: 'Beautiful, spacious and very clean villa with a private pool and responsive host. A few guests mention firm beds and limited bathroom privacy.', postedAt: '2026-01', sourceUrl: 'https://www.booking.com/reviews/my/hotel/ikiru-villa-18.en-gb.html' }
  ],
  'google-top-060': [
    { text: 'Quiet, clean and luxurious with strong service and a convenient Langkawi location. Guests especially like the private-pool experience.', postedAt: '2026-06', sourceUrl: 'https://www.booking.com/reviews/my/hotel/la-villa.en-gb.html' }
  ],
  'google-top-065': [
    { text: 'Popular with families for the kids facilities and convenient location. One guest noted the microwave was unusable and the sloped parking could scrape a car.', postedAt: '2025-11', sourceUrl: 'https://www.agoda.com/en-sg/new-desaru-baby-kids-friendly-pool-homestay/hotel/desaru-my.html' }
  ],
  'google-top-074': [
    { text: 'Peaceful sea-facing stay with welcoming staff and a private beach. Some guests say the property feels older and breakfast is average.', postedAt: '2026-08', sourceUrl: 'https://my.trip.com/hotels/balok-hotel-detail-7808928/royale-chulan-cherating/review.html' }
  ],
  'google-top-075': [
    { text: 'Central location, spacious rooms and strong value are common positives. Guests also like the helpful owner and easy access to Kota Bharu.', postedAt: '2026', sourceUrl: 'https://www.booking.com/hotel/my/studio-exclusive.html' }
  ],
  'google-top-078': [
    { text: 'Guests describe it as clean, spacious and very well equipped, with a pool that works well for family stays and good value for money.', postedAt: '2026-06', sourceUrl: 'https://www.agoda.com/en-ie/villa-family/hotel/kota-bharu-my.html' }
  ],
  'google-top-081': [
    { text: 'Comfortable, very clean and strategically located in Kota Bharu. Guests repeatedly mention good value and easy access to the centre.', postedAt: '2026', sourceUrl: 'https://my.worldorgs.com/katalog/kota-bharu/bangunan-pangsapuri/nazrinsstudioapartment' }
  ],
  'google-top-087': [
    { text: 'Very spacious and comfortable for big groups, with strong value and convenient access to town. Recent feedback says the house is clean and well equipped.', postedAt: '2026', sourceUrl: 'https://www.booking.com/hotel/my/homestay-hanan-kota-bharu.html' }
  ],
  'google-top-092': [
    { text: 'Clean, comfortable and strategically located near central Kuala Terengganu attractions, food and malls, with easy check-in and a responsive host.', postedAt: '2026-05', sourceUrl: 'https://www.booking.com/reviews/my/hotel/homestay-camelia-kuala-terengganu.ms.html' }
  ],
  'google-top-093': [
    { text: 'Family-friendly glamping with plenty to do, including kayaking, cycling, farm activities and pools. Guests praise the setting and activities; price and occasional cleanliness are the main criticisms.', postedAt: '2026-08', sourceUrl: 'https://www.thecamp.my/blogs/camping/coco-journey-glamping' }
  ]
};

export function getPublicReviewSnippets(slug: string): PublicReviewSnippet[] {
  return PUBLIC_REVIEW_SNIPPETS[slug] || [];
}

export const PUBLIC_REVIEW_COVERAGE = {
  listingsWithSnippets: Object.keys(PUBLIC_REVIEW_SNIPPETS).length,
  snippets: Object.values(PUBLIC_REVIEW_SNIPPETS).reduce((sum, items) => sum + items.length, 0),
  checkedAt: '2026-08-31'
} as const;
