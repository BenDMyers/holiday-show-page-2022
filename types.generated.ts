// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Community Sponsor documents */
interface CommunitySponsorDocumentData {
    /**
     * Title field in *Community Sponsor*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: communitySponsor.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Community Sponsor*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: communitySponsor.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Logo field in *Community Sponsor*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: communitySponsor.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Link field in *Community Sponsor*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: communitySponsor.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Organizers field in *Community Sponsor*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: communitySponsor.organizers[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    organizers: prismicT.GroupField<Simplify<CommunitySponsorDocumentDataOrganizersItem>>;
}
/**
 * Item in Community Sponsor → Organizers
 *
 */
export interface CommunitySponsorDocumentDataOrganizersItem {
    /**
     * Name field in *Community Sponsor → Organizers*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: communitySponsor.organizers[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Link field in *Community Sponsor → Organizers*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: communitySponsor.organizers[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Community Sponsor document from Prismic
 *
 * - **API ID**: `communitySponsor`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CommunitySponsorDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CommunitySponsorDocumentData>, "communitySponsor", Lang>;
/** Content for Guest documents */
interface GuestDocumentData {
    /**
     * Name field in *Guest*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Avatar field in *Guest*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.avatar
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    avatar: prismicT.ImageField<never>;
    /**
     * Job Title field in *Guest*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.jobTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    jobTitle: prismicT.KeyTextField;
    /**
     * Company field in *Guest*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.company
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    company: prismicT.KeyTextField;
    /**
     * Guest Bio field in *Guest*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.guestBio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    guestBio: prismicT.RichTextField;
    /**
     * Twitter URL field in *Guest*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.twitterUrl
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    twitterUrl: prismicT.KeyTextField;
    /**
     * Website URL field in *Guest*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.websiteUrl
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    websiteUrl: prismicT.KeyTextField;
    /**
     * Mastadon URL field in *Guest*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.mastadonUrl
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    mastadonUrl: prismicT.KeyTextField;
    /**
     * Topic Title field in *Guest*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.topicTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    topicTitle: prismicT.KeyTextField;
    /**
     * Topic Description field in *Guest*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest.topicDescription
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    topicDescription: prismicT.RichTextField;
}
/**
 * Guest document from Prismic
 *
 * - **API ID**: `guest`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GuestDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<GuestDocumentData>, "guest", Lang>;
/** Content for Organizer Team documents */
interface OrganizerTeamDocumentData {
    /**
     * Heading field in *Organizer Team*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: organizerTeam.heading
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *Organizer Team*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: organizerTeam.body
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
    /**
     * Member field in *Organizer Team*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: organizerTeam.member[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    member: prismicT.GroupField<Simplify<OrganizerTeamDocumentDataMemberItem>>;
}
/**
 * Item in Organizer Team → Member
 *
 */
export interface OrganizerTeamDocumentDataMemberItem {
    /**
     * Name field in *Organizer Team → Member*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: organizerTeam.member[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Website URL field in *Organizer Team → Member*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: organizerTeam.member[].websiteURL
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    websiteURL: prismicT.KeyTextField;
    /**
     * Contributions field in *Organizer Team → Member*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Design, organization, development..
     * - **API ID Path**: organizerTeam.member[].contributions
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    contributions: prismicT.KeyTextField;
}
/**
 * Organizer Team document from Prismic
 *
 * - **API ID**: `organizerTeam`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type OrganizerTeamDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<OrganizerTeamDocumentData>, "organizerTeam", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Page title
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Hero Body field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.body
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
    /**
     * Hero Eyebrow field in *Page*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: page.heroEyebrow[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    heroEyebrow: prismicT.GroupField<Simplify<PageDocumentDataHeroEyebrowItem>>;
    /**
     * CTA Description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.ctaDescription
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    ctaDescription: prismicT.KeyTextField;
    /**
     * Button Text field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.buttonText
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttonText: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
    /**
     * Metatitle field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.metatitle
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    metatitle: prismicT.KeyTextField;
    /**
     * Metadescription field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.metadescription
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    metadescription: prismicT.RichTextField;
    /**
     * OG Image field in *Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: page.ogImage
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    ogImage: prismicT.ImageField<never>;
}
/**
 * Item in Page → Hero Eyebrow
 *
 */
export interface PageDocumentDataHeroEyebrowItem {
    /**
     * Text field in *Page → Hero Eyebrow*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.heroEyebrow[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = GuestListSlice | SponsorListSlice | EventDetailsSlice | CharityDetailsSlice | RegisterCtaSlice | LastYearRecapSlice | DonationLeaderboardSlice | CommunityListSlice | FrequentlyAskedQuestionsSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Sponsor documents */
interface SponsorDocumentData {
    /**
     * Name field in *Sponsor*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Logo field in *Sponsor*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Description field in *Sponsor*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Link field in *Sponsor*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.link
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Sponsor document from Prismic
 *
 * - **API ID**: `sponsor`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SponsorDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SponsorDocumentData>, "sponsor", Lang>;
export type AllDocumentTypes = CommunitySponsorDocument | GuestDocument | OrganizerTeamDocument | PageDocument | SponsorDocument;
/**
 * Primary content in CharityDetails → Primary
 *
 */
interface CharityDetailsSliceDefaultPrimary {
    /**
     * Heading field in *CharityDetails → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: charity_details.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *CharityDetails → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: charity_details.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
    /**
     * Charity Logo field in *CharityDetails → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: charity_details.primary.charityLogo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    charityLogo: prismicT.ImageField<never>;
}
/**
 * Default variation for CharityDetails Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CharityDetails`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CharityDetailsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CharityDetailsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CharityDetails*
 *
 */
type CharityDetailsSliceVariation = CharityDetailsSliceDefault;
/**
 * CharityDetails Shared Slice
 *
 * - **API ID**: `charity_details`
 * - **Description**: `CharityDetails`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CharityDetailsSlice = prismicT.SharedSlice<"charity_details", CharityDetailsSliceVariation>;
/**
 * Primary content in CommunityList → Primary
 *
 */
interface CommunityListSliceDefaultPrimary {
    /**
     * Heading field in *CommunityList → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: community_list.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *CommunityList → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: community_list.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for CommunityList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CommunityList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CommunityListSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CommunityListSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CommunityList*
 *
 */
type CommunityListSliceVariation = CommunityListSliceDefault;
/**
 * CommunityList Shared Slice
 *
 * - **API ID**: `community_list`
 * - **Description**: `CommunityList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CommunityListSlice = prismicT.SharedSlice<"community_list", CommunityListSliceVariation>;
/**
 * Primary content in DonationLeaderboard → Primary
 *
 */
interface DonationLeaderboardSliceDefaultPrimary {
    /**
     * Heading field in *DonationLeaderboard → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: donation_leaderboard.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *DonationLeaderboard → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: donation_leaderboard.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for DonationLeaderboard Slice
 *
 * - **API ID**: `default`
 * - **Description**: `DonationLeaderboard`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DonationLeaderboardSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<DonationLeaderboardSliceDefaultPrimary>, never>;
/**
 * Slice variation for *DonationLeaderboard*
 *
 */
type DonationLeaderboardSliceVariation = DonationLeaderboardSliceDefault;
/**
 * DonationLeaderboard Shared Slice
 *
 * - **API ID**: `donation_leaderboard`
 * - **Description**: `DonationLeaderboard`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DonationLeaderboardSlice = prismicT.SharedSlice<"donation_leaderboard", DonationLeaderboardSliceVariation>;
/**
 * Primary content in EventDetails → Primary
 *
 */
interface EventDetailsSliceDefaultPrimary {
    /**
     * Heading field in *EventDetails → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event_details.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *EventDetails → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: event_details.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
    /**
     * Date and Time field in *EventDetails → Primary*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: event_details.primary.dateTime
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    dateTime: prismicT.TimestampField;
    /**
     * Link to Show field in *EventDetails → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: event_details.primary.showLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    showLink: prismicT.LinkField;
}
/**
 * Default variation for EventDetails Slice
 *
 * - **API ID**: `default`
 * - **Description**: `EventDetails`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventDetailsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<EventDetailsSliceDefaultPrimary>, never>;
/**
 * Slice variation for *EventDetails*
 *
 */
type EventDetailsSliceVariation = EventDetailsSliceDefault;
/**
 * EventDetails Shared Slice
 *
 * - **API ID**: `event_details`
 * - **Description**: `EventDetails`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EventDetailsSlice = prismicT.SharedSlice<"event_details", EventDetailsSliceVariation>;
/**
 * Primary content in FrequentlyAskedQuestions → Primary
 *
 */
interface FrequentlyAskedQuestionsSliceDefaultPrimary {
    /**
     * Heading field in *FrequentlyAskedQuestions → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: frequently_asked_questions.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *FrequentlyAskedQuestions → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: frequently_asked_questions.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Item in FrequentlyAskedQuestions → Items
 *
 */
export interface FrequentlyAskedQuestionsSliceDefaultItem {
    /**
     * Heading field in *FrequentlyAskedQuestions → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: frequently_asked_questions.items[].heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *FrequentlyAskedQuestions → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: frequently_asked_questions.items[].body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for FrequentlyAskedQuestions Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FrequentlyAskedQuestions`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FrequentlyAskedQuestionsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FrequentlyAskedQuestionsSliceDefaultPrimary>, Simplify<FrequentlyAskedQuestionsSliceDefaultItem>>;
/**
 * Slice variation for *FrequentlyAskedQuestions*
 *
 */
type FrequentlyAskedQuestionsSliceVariation = FrequentlyAskedQuestionsSliceDefault;
/**
 * FrequentlyAskedQuestions Shared Slice
 *
 * - **API ID**: `frequently_asked_questions`
 * - **Description**: `FrequentlyAskedQuestions`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FrequentlyAskedQuestionsSlice = prismicT.SharedSlice<"frequently_asked_questions", FrequentlyAskedQuestionsSliceVariation>;
/**
 * Primary content in GuestList → Primary
 *
 */
interface GuestListSliceDefaultPrimary {
    /**
     * Heading field in *GuestList → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest_list.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *GuestList → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: guest_list.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for GuestList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `GuestList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GuestListSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<GuestListSliceDefaultPrimary>, never>;
/**
 * Slice variation for *GuestList*
 *
 */
type GuestListSliceVariation = GuestListSliceDefault;
/**
 * GuestList Shared Slice
 *
 * - **API ID**: `guest_list`
 * - **Description**: `GuestList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GuestListSlice = prismicT.SharedSlice<"guest_list", GuestListSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Heading field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in LastYearRecap → Primary
 *
 */
interface LastYearRecapSliceDefaultPrimary {
    /**
     * Heading field in *LastYearRecap → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: last_year_recap.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *LastYearRecap → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: last_year_recap.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for LastYearRecap Slice
 *
 * - **API ID**: `default`
 * - **Description**: `LastYearRecap`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LastYearRecapSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<LastYearRecapSliceDefaultPrimary>, never>;
/**
 * Slice variation for *LastYearRecap*
 *
 */
type LastYearRecapSliceVariation = LastYearRecapSliceDefault;
/**
 * LastYearRecap Shared Slice
 *
 * - **API ID**: `last_year_recap`
 * - **Description**: `LastYearRecap`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LastYearRecapSlice = prismicT.SharedSlice<"last_year_recap", LastYearRecapSliceVariation>;
/**
 * Primary content in RegisterCTA → Primary
 *
 */
interface RegisterCtaSliceDefaultPrimary {
    /**
     * Heading field in *RegisterCTA → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: register_cta.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *RegisterCTA → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: register_cta.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for RegisterCTA Slice
 *
 * - **API ID**: `default`
 * - **Description**: `RegisterCTA`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RegisterCtaSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<RegisterCtaSliceDefaultPrimary>, never>;
/**
 * Slice variation for *RegisterCTA*
 *
 */
type RegisterCtaSliceVariation = RegisterCtaSliceDefault;
/**
 * RegisterCTA Shared Slice
 *
 * - **API ID**: `register_cta`
 * - **Description**: `RegisterCTA`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RegisterCtaSlice = prismicT.SharedSlice<"register_cta", RegisterCtaSliceVariation>;
/**
 * Primary content in SponsorList → Primary
 *
 */
interface SponsorListSliceDefaultPrimary {
    /**
     * Heading field in *SponsorList → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor_list.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
    /**
     * Body field in *SponsorList → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor_list.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for SponsorList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SponsorList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SponsorListSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SponsorListSliceDefaultPrimary>, never>;
/**
 * Slice variation for *SponsorList*
 *
 */
type SponsorListSliceVariation = SponsorListSliceDefault;
/**
 * SponsorList Shared Slice
 *
 * - **API ID**: `sponsor_list`
 * - **Description**: `SponsorList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SponsorListSlice = prismicT.SharedSlice<"sponsor_list", SponsorListSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { CommunitySponsorDocumentData, CommunitySponsorDocumentDataOrganizersItem, CommunitySponsorDocument, GuestDocumentData, GuestDocument, OrganizerTeamDocumentData, OrganizerTeamDocumentDataMemberItem, OrganizerTeamDocument, PageDocumentData, PageDocumentDataHeroEyebrowItem, PageDocumentDataSlicesSlice, PageDocument, SponsorDocumentData, SponsorDocument, AllDocumentTypes, CharityDetailsSliceDefaultPrimary, CharityDetailsSliceDefault, CharityDetailsSliceVariation, CharityDetailsSlice, CommunityListSliceDefaultPrimary, CommunityListSliceDefault, CommunityListSliceVariation, CommunityListSlice, DonationLeaderboardSliceDefaultPrimary, DonationLeaderboardSliceDefault, DonationLeaderboardSliceVariation, DonationLeaderboardSlice, EventDetailsSliceDefaultPrimary, EventDetailsSliceDefault, EventDetailsSliceVariation, EventDetailsSlice, FrequentlyAskedQuestionsSliceDefaultPrimary, FrequentlyAskedQuestionsSliceDefaultItem, FrequentlyAskedQuestionsSliceDefault, FrequentlyAskedQuestionsSliceVariation, FrequentlyAskedQuestionsSlice, GuestListSliceDefaultPrimary, GuestListSliceDefault, GuestListSliceVariation, GuestListSlice, HeroSliceDefaultPrimary, HeroSliceDefault, HeroSliceVariation, HeroSlice, LastYearRecapSliceDefaultPrimary, LastYearRecapSliceDefault, LastYearRecapSliceVariation, LastYearRecapSlice, RegisterCtaSliceDefaultPrimary, RegisterCtaSliceDefault, RegisterCtaSliceVariation, RegisterCtaSlice, SponsorListSliceDefaultPrimary, SponsorListSliceDefault, SponsorListSliceVariation, SponsorListSlice };
    }
}
