
// ---------- Data ----------
const categories = [
  {icon:'doc', name:'Admin & Entri Data', desc:'Kelola data, input laporan, susun dokumen.', count:'1.840 lowongan'},
  {icon:'chat', name:'Customer Service', desc:'Layani pelanggan lewat chat, email, atau telepon.', count:'1.520 lowongan'},
  {icon:'pen', name:'Penulis Konten', desc:'Tulis artikel, caption, dan naskah promosi.', count:'980 lowongan'},
  {icon:'palette', name:'Desain Grafis', desc:'Bikin visual sosial media, banner, dan materi promosi.', count:'760 lowongan'},
  {icon:'globe', name:'Penerjemah', desc:'Terjemahkan dokumen dan konten Inggris-Indonesia.', count:'430 lowongan'},
  {icon:'phone', name:'Telemarketing & Sales', desc:'Tawarkan produk lewat telepon atau pesan.', count:'690 lowongan'},
  {icon:'megaphone', name:'Admin Media Sosial', desc:'Kelola jadwal posting dan interaksi followers.', count:'1.110 lowongan'},
  {icon:'calc', name:'Akuntansi & Pembukuan', desc:'Susun laporan keuangan dan catat transaksi.', count:'350 lowongan'},
];

const icons = {
  doc:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 13h6M9 17h6"/></svg>',
  chat:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v12H8l-4 4z"/></svg>',
  pen:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/></svg>',
  palette:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a9 9 0 100 18c1.5 0 2-1 2-2s-.5-1.5-.5-2.5S14 15 15.5 15H18a3 3 0 003-3c0-5-4-9-9-9z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="11" r="1"/></svg>',
  globe:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z"/></svg>',
  phone:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 006 6L16 14l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg>',
  megaphone:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10v4h3l6 4V6L6 10z"/><path d="M17 8a4 4 0 010 8"/></svg>',
  calc:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M8 12h1M12 12h1M16 12h1M8 16h1M12 16h1M16 16h1"/></svg>',
};

const jobs = [
  {title:'Admin Toko Online', badge:'doc', pay:'Rp 3.000.000 – 4.500.000', type:'Per bulan · Paruh waktu', tags:['WFH','Fleksibel'], time:'2 hari lalu'},
  {title:'Customer Service Chat', badge:'chat', pay:'Rp 2.800.000 – 3.800.000', type:'Per bulan · Shift malam', tags:['WFH'], time:'1 hari lalu'},
  {title:'Penulis Artikel SEO', badge:'pen', pay:'Rp 100.000 – 250.000', type:'Per artikel · Freelance', tags:['WFH','Freelance'], time:'5 jam lalu'},
  {title:'Desainer Grafis Sosmed', badge:'palette', pay:'Rp 3.500.000', type:'Per bulan · Penuh waktu', tags:['WFH'], time:'3 hari lalu'},
  {title:'Penerjemah Inggris-Indonesia', badge:'globe', pay:'Rp 150.000 / 1000 kata', type:'Freelance', tags:['WFH','Fleksibel'], time:'1 hari lalu'},
];

const testimonials = [
  {quote:'“Sambil momong anak, aku masih bisa kerja admin online. Jamnya aku yang atur sendiri.”', name:'Rini', role:'Ibu Rumah Tangga, Yogyakarta', color:'var(--teal)'},
  {quote:'“Kuliah pagi, kerja jadi CS malam hari. Penghasilan tambahan buat uang jajan bulanan.”', name:'Dimas', role:'Mahasiswa, Malang', color:'var(--forest)'},
  {quote:'“Resign dari kantor, sekarang full remote jadi penulis konten. Waktu jauh lebih fleksibel.”', name:'Nurul', role:'Penulis Lepas, Bandung', color:'var(--sun)'},
];

const faqs = [
  {q:'Apakah harus bayar untuk daftar?', a:'Tidak. Mendaftar dan melamar lowongan di KerjaRumah gratis selamanya, tanpa biaya tersembunyi.'},
  {q:'Apakah lowongannya asli?', a:'Setiap perusahaan yang memasang lowongan diverifikasi oleh tim kami sebelum lowongan ditayangkan.'},
  {q:'Bagaimana cara pembayarannya?', a:'Pembayaran dilakukan langsung oleh perekrut ke rekening bank atau e-wallet kamu sesuai kesepakatan.'},
  {q:'Bisa kerja sambil kuliah atau momong anak?', a:'Bisa. Banyak lowongan dengan jam kerja fleksibel yang bisa disesuaikan dengan kesibukanmu.'},
];

// ---------- Render ----------
const katGrid = document.getElementById('katGrid');
categories.forEach((c,i)=>{
  const el = document.createElement('div');
  el.className = 'kat-card reveal';
  el.style.transitionDelay = (i*0.05)+'s';
  el.innerHTML = `<div class="kat-icon">${icons[c.icon]}</div><h4>${c.name}</h4><p>${c.desc}</p><span class="kat-count">${c.count}</span>`;
  katGrid.appendChild(el);
});

const jobList = document.getElementById('jobList');
jobs.forEach((j,i)=>{
  const el = document.createElement('div');
  el.className = 'job-card reveal';
  el.style.transitionDelay = (i*0.05)+'s';
  el.innerHTML = `
    <div class="job-left">
      <div class="job-badge">${icons[j.badge]}</div>
      <div>
        <div class="job-title">${j.title}</div>
        <div class="job-meta">${j.tags.map(t=>`<span class="job-tag">${t}</span>`).join('')}<span>${j.time}</span></div>
      </div>
    </div>
    <div class="job-right">
      <div class="job-pay"><div class="amount">${j.pay}</div><div class="type">${j.type}</div></div>
      <a href="https://tallynotrid.com/eeaf6um2c?key=06eccaf1d08d0edd91f0af2a12dd3553" class="job-btn">Lihat Detail</a>
    </div>`;
  jobList.appendChild(el);
});

const testiGrid = document.getElementById('testiGrid');
testimonials.forEach((t,i)=>{
  const el = document.createElement('div');
  el.className = 'testi-card reveal';
  el.style.transitionDelay = (i*0.08)+'s';
  el.innerHTML = `<p class="testi-quote">${t.quote}</p>
    <div class="testi-person">
      <div class="avatar" style="background:${t.color}">${t.name[0]}</div>
      <div><div class="p-name">${t.name}</div><div class="p-role">${t.role}</div></div>
    </div>`;
  testiGrid.appendChild(el);
});

const faqList = document.getElementById('faqList');
faqs.forEach((f)=>{
  const el = document.createElement('div');
  el.className = 'faq-item';
  el.innerHTML = `<div class="faq-q"><h4>${f.q}</h4><span class="faq-icon"></span></div><div class="faq-a"><p>${f.a}</p></div>`;
  const q = el.querySelector('.faq-q');
  const a = el.querySelector('.faq-a');
  q.addEventListener('click', ()=>{
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>{ i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null; });
    if(!isOpen){ el.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
  });
  faqList.appendChild(el);
});

// ---------- Schedule widget ----------
const schedGrid = document.getElementById('schedGrid');
const days = 7, slots = ['Pagi','Siang','Malam'];
const preset = ['1-0','2-0','1-1','4-2','5-2','3-0'];
slots.forEach((s, r)=>{
  const label = document.createElement('div');
  label.className = 'rlabel';
  label.textContent = s[0];
  schedGrid.appendChild(label);
  for(let d=0; d<days; d++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.key = d+'-'+r;
    if(preset.includes(d+'-'+r)) cell.classList.add('active');
    cell.addEventListener('click', ()=>{ cell.classList.toggle('active'); updateCount(); });
    schedGrid.appendChild(cell);
  }
});
function updateCount(){
  const active = document.querySelectorAll('#schedGrid .cell.active').length;
  document.getElementById('hourCount').textContent = active * 4;
}
document.getElementById('resetSched').addEventListener('click', ()=>{
  document.querySelectorAll('#schedGrid .cell').forEach(c=>c.classList.remove('active'));
  updateCount();
});
updateCount();

// ---------- Mobile menu ----------
document.querySelector('.hamburger').addEventListener('click', ()=>{
  const links = document.querySelector('.nav-links');
  const open = links.style.display === 'flex';
  links.style.cssText = open ? '' : 'display:flex; flex-direction:column; position:absolute; top:100%; left:0; right:0; background:var(--paper); padding:20px 32px; gap:18px; border-bottom:1px solid var(--line);';
});

// ---------- Scroll reveal ----------
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
