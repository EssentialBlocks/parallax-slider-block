/**
 * URL schemes a slide button may open. Mirrors wp_allowed_protocols().
 */
const ALLOWED_SCHEMES = [
	"http",
	"https",
	"ftp",
	"ftps",
	"mailto",
	"news",
	"irc",
	"irc6",
	"ircs",
	"gopher",
	"nntp",
	"feed",
	"telnet",
	"mms",
	"rtsp",
	"sms",
	"svn",
	"tel",
	"fax",
	"xmpp",
	"webcal",
	"urn",
];

/**
 * Returns true when the link is relative or uses an allowed scheme.
 *
 * @param {string} link
 * @returns {boolean}
 */
export default function isAllowedLink(link) {
	if (typeof link !== "string") {
		return false;
	}
	// Browsers ignore leading/trailing control characters and spaces, and
	// tabs or newlines anywhere, when they read a URL's scheme.
	const normalised = link
		.replace(/^[\u0000- ]+|[\u0000- ]+$/g, "")
		.replace(/[\t\n\r]/g, "");
	const scheme = normalised.match(/^([a-z][a-z0-9+.-]*):/i);
	return !scheme || ALLOWED_SCHEMES.includes(scheme[1].toLowerCase());
}
