
// =====================================
// MSAWENKOSI & NOSIPHO WEDDING INVITATION
// =====================================

const RSVP_CONTACTS = {
  missZungu: {
    phoneNumber: "27731553857",
    greeting: "Hello Miss Zungu"
  },
  mrKhoza: {
    phoneNumber: "27822636269",
    greeting: "Hello Mr Khoza"
  }
};

// =====================================
// WHATSAPP RSVP
// =====================================

document.querySelectorAll("[data-rsvp-contact]").forEach(link => {
  const contact = link.dataset.rsvpContact;
  const rsvpContact = RSVP_CONTACTS[contact];

  if (!rsvpContact) {
    throw new Error(`Unknown RSVP contact: ${contact}`);
  }

  const message = encodeURIComponent(
    `${rsvpContact.greeting}. I would like to RSVP for your traditional wedding on 20 December 2026 at 11:00 AM.`
  );

  link.href = `https://wa.me/${rsvpContact.phoneNumber}?text=${message}`;
});


// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");

menuToggle.addEventListener("click", () => {

  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

});

nav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

  });

});
