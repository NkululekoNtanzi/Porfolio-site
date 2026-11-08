export function renderContact(socials) {
  const container = document.getElementById('contact-root');
  if (!container) return;

  // Clean the email string in case "mailto:" was included in profile.json
  const rawEmail = socials.email || '';
  const cleanEmail = rawEmail.replace(/^mailto:/, '');

  container.innerHTML = `
    <div class="mb-8">
      <span class="text-blue-600 font-mono text-sm tracking-wider uppercase font-bold">Get In Touch</span>
      <h2 class="text-3xl font-black text-black mt-1 uppercase tracking-tight">Direct Contact & Communication</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <span class="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">[EMAIL]</span>
        <a href="mailto:${cleanEmail}" class="text-lg font-black text-black hover:text-blue-600 transition break-all">${cleanEmail}</a>
      </div>
      <div class="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <span class="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">[PHONE]</span>
        <a href="tel:${socials.phone}" class="text-lg font-black text-black hover:text-blue-600 transition">${socials.phone}</a>
      </div>
      <div class="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <span class="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">[LOCATION]</span>
        <span class="text-lg font-black text-black block">${socials.location}</span>
      </div>
    </div>
  `;
}