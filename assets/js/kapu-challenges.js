/* Field Notebook catalog - MOCK SITE FOR TRAINING. Generated.
 * Flags are XOR-encrypted under each challenge's answer; nothing here is a plain flag. */
window.KAPU_CHALLENGES = {
 "meta": {
  "accent": "#0f7f8a",
  "panelBg": "#0b1f33",
  "panelCard": "#16334f",
  "panelLine": "#2a4a6b",
  "panelInk": "#f3f0e8",
  "panelMuted": "#9fb2c4",
  "title": "Halyard Maritime Logistics",
  "slug": "halyard-maritime-dashboard"
 },
 "items": [
  {
   "id": "robots-draw-the-map",
   "code": "HM-01",
   "title": "The assessment baseline",
   "diff": "Easy",
   "objective": "Read the crawler policy. Enter the backup directory it tries to hide.",
   "learned": "A robots.txt disallow list does not protect anything; it is a map of what you wanted hidden. Private paths need real access control, not obscurity.",
   "h": "236cccf5",
   "f": "692e202410071f4d4016124e0f071158021609064618115f52"
  },
  {
   "id": "comments-are-not-secret",
   "code": "HM-02",
   "title": "Credentials in client-delivered code",
   "diff": "Easy",
   "objective": "View the sign-in page source. Enter the vendor demo account password left in a comment.",
   "learned": "Everything in client-delivered source, including HTML comments, is visible to every visitor. Credentials never belong in code sent to the browser.",
   "h": "608a6311",
   "f": "2e2d2d3e1a110b5f5d575a551b4c0d0b045f0a5d441f47440b13090d1c"
  },
  {
   "id": "secrets-in-javascript",
   "code": "HM-03",
   "title": "The account store in the browser",
   "diff": "Easy",
   "objective": "Read the login script. Enter the most powerful account as username:password.",
   "learned": "Shipping an account list to the browser hands every credential to the user. Authentication must be enforced on the server, not in JavaScript.",
   "h": "ef898f49",
   "f": "27282c2e154904071f0c1a12490407435000120c1a0d130d1d1d13"
  },
  {
   "id": "shared-passwords-are-no-passwords",
   "code": "HM-04",
   "title": "Operations handling of shared secrets",
   "diff": "Easy",
   "objective": "Read the operations notes. Enter the single shared login name the whole day shift uses.",
   "learned": "A shared, never-rotated login removes individual accountability: you cannot tell who did what. Every person needs their own credential.",
   "h": "b15ff1f1",
   "f": "2722202b02001c001c0408540315121d16030b17074c0f1309541d1b4c1e001f0a041b130a1211"
  },
  {
   "id": "old-backups-still-talk",
   "code": "HM-05",
   "title": "Decode the retained backup",
   "diff": "Medium",
   "objective": "Find the leftover backup, Base64-decode its auditFlag, and enter the decoded value.",
   "learned": "A forgotten, web-reachable backup keeps live secrets exposed. Secrets must be removed from, or encrypted in, anything reachable.",
   "h": "9ad1130f",
   "f": "2e212d6a1f0d41064c010a161b581b16545e435e5f5d45190d410f1f"
  },
  {
   "id": "never-trust-the-browser",
   "code": "HM-06",
   "title": "Authorization is a client-side class",
   "diff": "Medium",
   "objective": "Reach the admin panel without an admin account (edit your stored role, or View Source). Enter the role you set.",
   "learned": "Authorization enforced only in the browser is no control. The user owns the browser and can change the stored role.",
   "h": "34c83614",
   "f": "27282c2e150f011b0c1c4c101f1c1d154919010b4c061f061912011f14"
  },
  {
   "id": "escape-what-you-echo",
   "code": "HM-07",
   "title": "Output encoding on the search field",
   "diff": "Medium",
   "objective": "Make the shipment search render HTML you typed, then enter the unsafe DOM method the code uses.",
   "learned": "Writing user input with innerHTML lets typed markup execute (reflected XSS). Encode output for the context it lands in.",
   "h": "4088425a",
   "f": "2f222f22090d070e0d190b43121a09004015061b430011001b10"
  },
  {
   "id": "public-answers-are-not-secrets",
   "code": "HM-08",
   "title": "Knowledge-based reset against public data",
   "diff": "Medium",
   "objective": "Reset an account using a public fact, then enter the security answer you used.",
   "learned": "Knowledge-based reset built on public facts is defeatable by anyone who can read the staff page. Identity proofing needs a real secret.",
   "h": "d43cf975",
   "f": "2b23222f121d1a0104000e4202061a1a0a111b440c1d064507021b4e1b0c0e1d061c1a10"
  },
  {
   "id": "rotate-keys-on-a-schedule",
   "code": "HM-09",
   "title": "Recover the unrotated integration key",
   "diff": "Hard",
   "objective": "Reach the admin panel, hex-decode its keyCheck value, and enter the decoded value.",
   "learned": "A long-lived, never-rotated, unscoped integration key is a finding on its own. Rotate and scope keys on a schedule.",
   "h": "5a2bbd52",
   "f": "362333331a071b1c0e060c5912481216544200481748014e1a0a1014180019"
  },
  {
   "id": "one-pin-sinks-the-fleet",
   "code": "HM-10",
   "title": "Fleet-wide shared authenticator",
   "diff": "Hard",
   "objective": "Read the vessel notes. Enter the PIN shared by every bridge tablet in the fleet.",
   "learned": "One shared authenticator across a fleet turns a single lost device into total compromise. Use per-device identity.",
   "h": "fdc422fd",
   "f": "777e72734a5d5d511c425a5a1c415a5a5a411e4059571e525d5756404c"
  },
  {
   "id": "least-privilege-for-data-too",
   "code": "HM-11",
   "title": "Over-broad data exposure on a shared page",
   "diff": "Hard",
   "objective": "Review the Customers page. Enter the data field that should never be on a shared shift page.",
   "learned": "Least privilege governs data fields, not just pages. A shift page needs contact info, never every account's credit limit.",
   "h": "c7355ecf",
   "f": "253e24231218450d1a194404111b130d05114709440b06064e160410085954030610"
  },
  {
   "id": "remember-me-stores-plaintext",
   "code": "HM-12",
   "title": "Plaintext credential persistence",
   "diff": "Hard",
   "objective": "Use 'Remember me', then inspect storage. Enter the localStorage key that holds the login in clear text.",
   "learned": "Persisting credentials in clear text in the browser turns one shared PC into a standing authentication bypass.",
   "h": "d2f44004",
   "f": "2e212d1809170808080f07171a40013a5f16190a1f07165f18010d361c11081d191f"
  }
 ]
};
